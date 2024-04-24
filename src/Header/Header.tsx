import React, {useState} from 'react';
import {NavLink} from 'react-router-dom';
import styles from "./Header.module.scss";


export const Header = () => {
    const [burger, setBurger] = useState<boolean>(false);


    return (
        <header className={styles.header}>
            <div className={styles.header__wrapper}>
                <div
                    className={`${styles.menu__fake} ${burger ? styles._active : ""}`}/>
                <div className={`${styles.header__menu} ${styles.menu}`}>
                    <div onBlur={(e) => {
                        setBurger(false)
                    }} tabIndex={0} onClick={(e) => {
                        setBurger(!burger)
                    }}
                         className={`${styles.menu__icon} ${styles.icon_menu} ${burger ? styles._active : ""}`}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <nav
                        className={`${styles.menu__body} ${burger ? styles._active : ""}`}>
                        <ul className={styles.menu__list}>
                            <li className={`${styles.menu__link} ${burger ? styles._active : ""} `}>
                                <NavLink activeClassName={styles.act} to="/home"
                                         className={styles.link}><span
                                    className={styles.iconHouse}> </span><span
                                    className={styles.line}> </span> <span
                                    className={styles.text}>Home</span></NavLink>
                            </li>
                            <li className={`${styles.menu__link} ${burger ? styles._active : ""}`}>
                                <NavLink activeClassName={styles.act} to="/about"
                                         className={styles.link}><span
                                    className={styles.iconIright}> </span><span
                                    className={styles.line}> </span> <span
                                    className={styles.text}>About</span></NavLink>
                            </li>
                            <li className={`${styles.menu__link} ${burger ? styles._active : ""}`}>
                                <NavLink activeClassName={styles.act} to="/portfolio"
                                         className={styles.link}><span
                                    className={styles.iconPortfolio}> </span><span
                                    className={styles.line}> </span> <span
                                    className={styles.text}>Portfolio</span></NavLink>
                            </li>
                            <li className={`${styles.menu__link} ${burger ? styles._active : ""}`}>
                                <NavLink activeClassName={styles.act} to="/contacts"
                                         className={styles.link}><span
                                    className={styles.iconContact}> </span><span
                                    className={styles.line}> </span> <span
                                    className={styles.text}>Contacts</span></NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
};

