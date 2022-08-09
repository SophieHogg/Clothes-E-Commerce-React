import React from "react";
import styles from "./Home.module.scss";

const Home = () => {
    return (
        <main className={styles.Home}>
            <div className={styles.Home__WrapperDiv}>
                <h2 className={styles.Home__Subtitle}>
                    Welcome to GumFlower Clothing!
                </h2>
                <p className={styles.Home__Para}>
                    Feel free to browse our current catalogue on the Product
                    List page. Alternatively, you can check your cart on the
                    Cart page, indicated by the black shopping cart.
                </p>
                <p className={styles.Home__Para}>
                    We regularly get new stock and new items, so check back in
                    if there's nothing you want right now.
                </p>
            </div>
        </main>
    );
};

export default Home;
