import { React, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getItemById } from "../../services/getStoreItems";
import styles from "./ProductPage.module.scss";

const ProductPage = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        getItemById(id)
            .then(setProduct)
            .finally(() => setLoading(false));
    }, [id]);

    return (
        <>
            {loading ? (
                <h1>Loading</h1>
            ) : (
                <main className={styles.ProductPage}>
                    <section className={styles.ProductPage__Gallery}>
                        <img
                            src={product.url}
                            alt={product.name}
                            className={styles.ProductPage__Gallery__GalleryImg}
                        />
                        {product.urlcolour2 && (
                            <img
                                src={product.urlcolour2}
                                alt={product.name}
                                className={
                                    styles.ProductPage__Gallery__GalleryImg
                                }
                            />
                        )}
                    </section>
                    <section className={styles.ProductPage__Information}>
                        <h1 className={styles.ProductPage__Title}>
                            {product.name}
                        </h1>
                        {product.stock === 0 ? (
                            <div className={styles.ProductPage__OutOfStock}>
                                <p
                                    className={
                                        styles.ProductPage__OutOfStock__Text
                                    }
                                >
                                    Out of stock
                                </p>
                            </div>
                        ) : (
                            <h2>${product.price.toFixed(2)}</h2>
                        )}

                        <div className={styles.ProductPage__ColourBox}>
                            {product.colour.map((colour, index) => (
                                <div
                                    key={index}
                                    className={
                                        styles.ProductPage__ColourBox__Colour
                                    }
                                    style={{ backgroundColor: colour }}
                                ></div>
                            ))}
                        </div>
                        {product.stock > 0 || product.stock > 10 ? (
                            <h4 className={styles.ProductPage__StockNotice}>
                                Not many left in stock!
                            </h4>
                        ) : (
                            <></>
                        )}
                        {product.favourited && (
                            <p>This item is in your favourites.</p>
                        )}
                        <div className={styles.ProductPage__CartInfo}>
                            <p>{product.inCart} in Cart</p>
                        </div>
                        <p>Materials: {product.materials.join(", ")}</p>
                    </section>
                </main>
            )}
        </>
    );
};

export default ProductPage;
