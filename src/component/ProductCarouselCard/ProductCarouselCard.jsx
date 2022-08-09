import React from "react";
import styles from "./ProductCarouselCard.module.scss";
import { NavLink } from "react-router-dom";

const ProductCarouselCard = (data) => {
    data = data.data;
    return (
        <>
            <NavLink to={`/productlist/${data.id}`}>
                <section className={styles.Product}>
                    <img
                        src={data.url}
                        alt={data.name}
                        className={styles.Product__Image}
                    />

                    <h2 className={styles.Product__Title}>{data.name}</h2>

                    {data.stock > 0 ? (
                        <p className={styles.Product__Price}>
                            ${data.price.toFixed(2)}
                        </p>
                    ) : (
                        <div className={styles.Product__OutOfStock}>
                            <p className={styles.Product__OutOfStock__Text}>
                                Out of stock
                            </p>
                        </div>
                    )}
                </section>
            </NavLink>
        </>
    );
};

export default ProductCarouselCard;
