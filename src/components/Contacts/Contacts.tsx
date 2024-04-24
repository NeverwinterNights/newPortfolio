import React, {useEffect, useState} from 'react';
import styles from "./Contacts.module.scss";
import {NavLink} from "react-router-dom";
import arrow from "../../img/arrow.svg";

export const Contacts = () => {

    const [customStyle, setCustomStyle] = useState(styles.wrapper)


    useEffect(() => {


        const id=setTimeout(() => setCustomStyle(styles.test), 0)

        return () => {
            setCustomStyle(styles.wrapper)
            clearTimeout(id)
        }
    }, [])


    return (
        <div className={customStyle}>
            <div className={styles.fullscreen}>
                <NavLink to="/header" className={styles.burger}><img src={arrow} alt=""/></NavLink>
                <div className={styles.fullscreen__body}>
                    <div className={styles.content}>
                        <div className={styles.content__title}>MY <span>GET IN TOUCH</span></div>
                        <div className={styles.content__subtitle}>I’M ALWAYS OPEN TO DISCUSSING PRODUCT DESIGN WORK OR
                            PARTNERSHIPS.
                        </div>
                        <div className={styles.body}>
                            <div className={styles.body__row}>
                                <div className={styles.body__item}>
                                    <div className={styles.body__title}>Phone</div>
                                    <a href="tel:+375293779934" className={styles.body__info}>+375293779934</a>
                                </div>
                                <div className={styles.body__item}>
                                    <div className={styles.body__title}>Email</div>
                                    <a href="mailto:cardash@mail.ru" className={styles.body__info}>cardash@mail.ru</a>
                                </div>
                                <div className={styles.body__item}>
                                    <div className={styles.body__title}>Telegram</div>
                                    <a href={"https://t.me/Reptiloid_from_Nubiru"}
                                       className={styles.body__info}>Pavel</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};



