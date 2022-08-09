import React from "react";
import ProductCarouselCard from "./../ProductCarouselCard/ProductCarouselCard";
import styles from "./ProductCarousel.module.scss";

const ProductCarousel = ({ productList }) => {
    return (
        <section className={styles.ProductCarousel}>
            <h3 className={styles.ProductCarousel__Title}>Favourited Items</h3>
            <div className={styles.ProductCarousel__Items}>
                <div className={styles.ProductCarousel__Items__Grid}>
                    {productList.map((item) => (
                        <ProductCarouselCard key={item.id} data={item} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProductCarousel;
