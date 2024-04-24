import React, {useEffect, useState} from 'react';
import styles from "./Preloader.module.scss";
import {Redirect} from "react-router-dom";

export const Preloader =() => {
    const [customStyle, setCustomStyle] = useState(styles.main)


    useEffect(() => {


        setTimeout(() => setCustomStyle(styles.main_after), 2000)




    }, [])

 return (
    <div className={styles.customStyle}>

    </div>

    );
};

