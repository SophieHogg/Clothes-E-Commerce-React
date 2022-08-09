import React from "react";
import styles from "./ColourBox.module.scss";

const ColourBox = ({ colour }) => {
    return (
        <div
            style={{ backgroundColor: colour }}
            className={styles.ColourBox}
        ></div>
    );
};

export default ColourBox;
