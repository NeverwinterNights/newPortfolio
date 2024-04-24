import React from 'react';
import styles from "../../Header/Header.module.scss";
import {NavLink} from "react-router-dom";

export const MobileMenu = () => {
    return (
        <div className={styles.header__mobile}>

            <NavLink to="/home" className={styles.header__mobile__wrapper}>
                <div className={styles.link}>
                    <span className={styles.iconHouse}> </span>
                    <span className={styles.text}>Home</span>
                </div>
            </NavLink>


            <NavLink to="/about" className={styles.header__mobile__wrapper}>
                <div className={styles.link}>
                    <span className={styles.iconIright}> </span>
                    <span className={styles.text}>About</span>
                </div>
            </NavLink>


            <NavLink to="/portfolio" className={styles.header__mobile__wrapper}>
                <div className={styles.link}><span
                    className={styles.iconPortfolio}> </span>
                    <span className={styles.text}>Portfolio</span>
                </div>
            </NavLink>


            <NavLink to="/contacts" className={styles.header__mobile__wrapper}>
                <div className={styles.link}><span
                    className={styles.iconContact}> </span>
                    <span className={styles.text}>Contacts</span>
                </div>
            </NavLink>

        </div>
    );
};

