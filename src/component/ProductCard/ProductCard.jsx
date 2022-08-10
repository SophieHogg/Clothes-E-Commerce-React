import React from "react";
import styles from "./ProductCard.module.scss";
import ColourBox from "../ColourBox/ColourBox";
import { NavLink } from "react-router-dom";

const ProductCard = (props) => {
    const { data, addToCartClick, removeFromCartClick, toggleFavouritesClick } =
        props;

    const colourArray = data.colour;
    return (
        <>
            <section className={styles.Product}>
                <NavLink to={`/productlist/${data.id}`}>
                    <img
                        src={data.url}
                        alt={data.name}
                        className={styles.Product__Image}
                    />
                    <h2 className={styles.Product__Title}>{data.name}</h2>

                    <div className={styles.Product__ColourRow}>
                        {colourArray.map((colour, index) => (
                            <ColourBox key={index} colour={colour} />
                        ))}
                    </div>
                </NavLink>
                {data.stock === 0 ? (
                    <div>
                        <div className={styles.Product__OutOfStock}>
                            <p className={styles.Product__OutOfStock__Text}>
                                Out of stock
                            </p>
                            <br />
                        </div>
                        <p className={styles.Product__OutOfStock__InCart}>
                            In Cart: {data.inCart}
                        </p>
                    </div>
                ) : (
                    <div>
                        <p className={styles.Product__Price}>
                            ${data.price.toFixed(2)}
                        </p>
                    </div>
                )}
                <div className={styles.Product__CartInfoWrapper}>
                    <div className={styles.Product__CartInfo}>
                        <button
                            className={styles.Product__CartInfo__Button}
                            onClick={() =>
                                removeFromCartClick(
                                    data.id,
                                    data.stock,
                                    data.inCart
                                )
                            }
                        >
                            -
                        </button>
                        <p className={styles.Product__CartInfo__InCart}>
                            {data.inCart}
                            {""}
                        </p>
                        <button
                            className={styles.Product__CartInfo__Button}
                            onClick={() =>
                                data.stock > 0 &&
                                addToCartClick(data.id, data.stock, data.inCart)
                            }
                        >
                            +
                        </button>
                    </div>
                </div>
                <button
                    className={styles.Product__Favourited}
                    onClick={() =>
                        toggleFavouritesClick(data.id, data.favourited)
                    }
                >
                    Toggle Favourite
                </button>
                {data.favourited && (
                    <p className={styles.Product__Favourited__Text}>
                        Added to Favourites!
                    </p>
                )}
            </section>
        </>
    );
};

export default ProductCard;
