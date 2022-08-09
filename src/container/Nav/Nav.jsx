import { NavLink } from "react-router-dom";
import styles from "./Nav.module.scss";
import React from "react";

const Nav = () => {
    const activeStyle = ({ isActive }) =>
        isActive ? `${styles.Link} ${styles.Link_Active} ` : styles.Link;

    return (
        <nav className={styles.NavBar}>
            <NavLink className={activeStyle} to="/">
                <div className={styles.Nav_backgroundDiv}>Home</div>
            </NavLink>
            <NavLink className={activeStyle} to="/productlist">
                <div className={styles.Nav_backgroundDiv}>Product List</div>
            </NavLink>
            <NavLink className={activeStyle} to="/cart">
                <div className={styles.Nav_backgroundDiv}>Cart</div>
            </NavLink>
        </nav>
    );
};

export default Nav;
