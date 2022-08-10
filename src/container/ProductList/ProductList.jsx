import ProductCard from "./../../component/ProductCard/ProductCard";
import styles from "./ProductList.module.scss";
import ProductCarousel from "../../component/ProductCarousel/ProductCarousel";
import { useState, useEffect } from "react";
import {
    getStoreItems,
    addToCart,
    removeFromCart,
    toggleFavourites,
} from "../../services/getStoreItems";

const ProductList = () => {
    const [clicks, setClicks] = useState(0);
    const [favourite, setFavourite] = useState(false);
    const [storeItems, setStoreItems] = useState([]);

    useEffect(() => {
        const wrapper = async () => {
            const storeItems = await getStoreItems();
            setStoreItems(storeItems);
        };
        wrapper();
    }, [clicks, favourite]);

    const toggleFavouritesClick = async (id, favourited) => {
        await toggleFavourites(id, favourited);
        setFavourite(!favourite);
    };

    const addToCartClick = async (id, stock, inCart) => {
        await addToCart(id, stock, inCart);
        setClicks(clicks + 1);
    };
    const removeFromCartClick = async (id, stock, inCart) => {
        await removeFromCart(id, stock, inCart);
        setClicks(clicks - 1);
    };

    return (
        <main>
            <ProductCarousel
                productList={storeItems.filter((item) => {
                    return item.favourited === true;
                })}
            />

            <section className={styles.ProductList}>
                <h1>Shop</h1>
                <div className={styles.ProductList__Items}>
                    <div className={styles.ProductList__Items__Grid}>
                        {storeItems.map((item) => (
                            <ProductCard
                                key={item.id}
                                data={item}
                                addToCartClick={addToCartClick}
                                removeFromCartClick={removeFromCartClick}
                                toggleFavouritesClick={toggleFavouritesClick}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
};

export default ProductList;
