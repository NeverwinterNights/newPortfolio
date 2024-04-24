import {useEffect, useState} from 'react';
import styles from "./Preloader.module.scss";

export const Preloader = () => {
    const [_, setCustomStyle] = useState(styles.main)


    useEffect(() => {


        setTimeout(() => setCustomStyle(styles.main_after), 2000)


    }, [])

    return (
        <div className={styles.customStyle}>

        </div>

    );
};

