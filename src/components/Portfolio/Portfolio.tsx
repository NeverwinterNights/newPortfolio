import React, {useEffect, useState} from 'react';
import styles from "./Portfolio.module.scss";
import {NavLink} from "react-router-dom";
import arrow from "../../img/arrow.svg";
import photo1 from "./../../img/portfolio/nor.jpg";
import photo2 from "./../../img/portfolio/2.jpg";
import photo3 from "./../../img/portfolio/3.jpg";
import photo4 from "./../../img/portfolio/search.jpg";
import photo5 from "./../../img/portfolio/net.jpg";
import photo6 from "./../../img/portfolio/cards.jpg";
import photo7 from "./../../img/portfolio/cakes.jpg";
import photo0 from "./../../img/portfolio/todo.jpg";
import weatherPhoto from "./../../img/portfolio/weather.jpg";
import pokemon from "./../../img/portfolio/pokemon.jpg";
import mosh from "./../../img/portfolio/mosh.jpg";
import food from "./../../img/portfolio/food.jpg";
import cats from "./../../img/portfolio/cats.jpg";
import location from "./../../img/portfolio/location.jpg";



export const Portfolio = () => {

    const [customStyle, setCustomStyle] = useState(styles.wrapper)


    useEffect(() => {


        const id = setTimeout(() => setCustomStyle(styles.test), 0)

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
                        <div className={styles.content__title}>MY <span>PORTFOLIO</span></div>
                        {/*<div className={styles.content__subtitle}>A FEW RECENT DESIGN AND CODING PROJECTS. WANT TO*/}
                        {/*    SEE*/}
                        {/*    MORE? EMAIL ME.*/}
                        {/*</div>*/}
                        <div className={styles.portfolio__native}>
                            <div className={styles.content__subtitle}>React.Native Project</div>
                            <div className={styles.native__body}>
                                <div className={styles.native__row}>
                                    <div className={styles.native__column}>
                                        <div className={styles.native__item}>
                                            <div className={styles.native__image}><img src={mosh} alt=""/></div>
                                            <div className={styles.native__title}>React.Native Project</div>
                                            <div className={styles.native__footer}>
                                                <a target={"_blank"}
                                                   href={"https://github.com/NeverwinterNights/NatMoRT"}
                                                   className={styles.portfolio__code}>Code</a>
                                                <a target={"_blank"}
                                                   href={"https://www.youtube.com/watch?v=vPvMSi_jS4c"}
                                                   className={styles.portfolio__demo}>Video</a>
                                            </div>
                                        </div>
                                    </div>

                                    <div className={styles.native__column}>
                                        <div className={styles.native__item}>
                                            <div className={styles.native__image}><img src={food} alt=""/></div>
                                            <div className={styles.native__title}>React.Native Project</div>
                                            <div className={styles.native__footer}>
                                                <a target={"_blank"}
                                                   href={"https://github.com/NeverwinterNights/food"}
                                                   className={styles.portfolio__code}>Code</a>
                                                <a target={"_blank"}
                                                   href={"https://www.youtube.com/watch?v=dKV1qFixb4U&t=9s"}
                                                   className={styles.portfolio__demo}>Video</a>
                                            </div>
                                        </div>
                                    </div>

                                    <div className={styles.native__column}>
                                        <div className={styles.native__item}>
                                            <div className={styles.native__image}><img src={cats} alt=""/></div>
                                            <div className={styles.native__title}>React.Native Project</div>
                                            <div className={styles.native__footer}>
                                                <a target={"_blank"}
                                                   href={"https://github.com/NeverwinterNights/practiceNative"}
                                                   className={styles.portfolio__code}>Code</a>
                                                <a target={"_blank"}
                                                   href={"https://www.youtube.com/watch?v=25VdZcOQ1HM&t=19s"}
                                                   className={styles.portfolio__demo}>Video</a>
                                            </div>
                                        </div>
                                    </div>

                                    <div className={styles.native__column}>
                                        <div className={styles.native__item}>
                                            <div className={styles.native__image}><img src={location} alt=""/></div>
                                            <div className={styles.native__title}>React.Native Project</div>
                                            <div className={styles.native__footer}>
                                                <a target={"_blank"}
                                                   href={"https://github.com/NeverwinterNights/device"}
                                                   className={styles.portfolio__code}>Code</a>
                                                <a target={"_blank"}
                                                   href={"https://www.youtube.com/watch?v=_GnO3qo-Kc8"}
                                                   className={styles.portfolio__demo}>Video</a>
                                            </div>
                                        </div>
                                    </div>

                                    <div className={styles.native__column}>
                                        <div className={styles.native__item}>
                                            <div className={styles.native__image}><img src={pokemon} alt=""/></div>
                                            <div className={styles.native__title}>React.Native Project</div>
                                            <div className={styles.native__footer}>
                                                <a target={"_blank"}
                                                   href={"https://github.com/NeverwinterNights/pokemon"}
                                                   className={styles.portfolio__code}>Code</a>
                                                <a target={"_blank"} href={"https://www.youtube.com/shorts/748onPz1lT4"}
                                                   className={styles.portfolio__demo}>Video</a>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className={styles.content__subtitle}>React and HTML/CSS Project</div>
                        <div className={styles.portfolio__body}>
                            <div className={styles.portfolio__row}>
                                <div className={styles.portfolio__column}>
                                    <div className={styles.portfolio__item}>
                                        <div className={styles.portfolio__image}><img src={weatherPhoto} alt=""/></div>
                                        <div className={styles.portfolio__title}>React Project</div>
                                        <div className={styles.portfolio__footer}>
                                            <a target={"_blank"}
                                               href={"https://github.com/NeverwinterNights/weather_project"}
                                               className={styles.portfolio__code}>Code</a>
                                            <a target={"_blank"}
                                               href={"https://neverwinternights.github.io/weather_project/"}
                                               className={styles.portfolio__demo}>Demo</a>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.portfolio__column}>
                                    <div className={styles.portfolio__item}>
                                        <div className={styles.portfolio__image}><img src={photo0} alt=""/></div>
                                        <div className={styles.portfolio__title}>React Project</div>
                                        <div className={styles.portfolio__footer}>
                                            <a target={"_blank"} href={"https://github.com/NeverwinterNights/ToDo"}
                                               className={styles.portfolio__code}>Code</a>
                                            <a target={"_blank"} href={"https://neverwinternights.github.io/ToDo/"}
                                               className={styles.portfolio__demo}>Demo</a>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.portfolio__column}>
                                    <div className={styles.portfolio__item}>
                                        <div className={styles.portfolio__image}><img src={photo4} alt=""/></div>
                                        <div className={styles.portfolio__title}>React Project</div>
                                        <div className={styles.portfolio__footer}>
                                            <a target={"_blank"}
                                               href={"https://github.com/NeverwinterNights/FilmsSearch"}
                                               className={styles.portfolio__code}>Code</a>
                                            <a target={"_blank"}
                                               href={"https://neverwinternights.github.io/FilmsSearch/"}
                                               className={styles.portfolio__demo}>Demo</a>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.portfolio__column}>
                                    <div className={styles.portfolio__item}>
                                        <div className={styles.portfolio__image}><img src={photo5} alt=""/></div>
                                        <div className={styles.portfolio__title}>React Project</div>
                                        <div className={styles.portfolio__footer}>
                                            <a target={"_blank"}
                                               href={"https://github.com/NeverwinterNights/Social-Network"}
                                               className={styles.portfolio__code}>Code</a>
                                            <a target={"_blank"}
                                               href={"https://neverwinternights.github.io/Social-Network/"}
                                               className={styles.portfolio__demo}>Demo</a>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.portfolio__column}>
                                    <div className={styles.portfolio__item}>
                                        <div className={styles.portfolio__image}><img src={photo6} alt=""/></div>
                                        <div className={styles.portfolio__title}>Group React Project</div>
                                        <div className={styles.portfolio__footer}>
                                            <a target={"_blank"} href={"https://github.com/NeverwinterNights/cards"}
                                               className={styles.portfolio__code}>Code</a>
                                            <a target={"_blank"} href={"https://alfilip.github.io/cards"}
                                               className={styles.portfolio__demo}>Demo</a>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.portfolio__column}>
                                    <div className={styles.portfolio__item}>
                                        <div className={styles.portfolio__image}><img src={photo1} alt=""/></div>
                                        <div className={styles.portfolio__title}>HTML/Adaptive site</div>
                                        <div className={styles.portfolio__footer}>
                                            <a target={"_blank"} href={"https://github.com/NeverwinterNights/norw"}
                                               className={styles.portfolio__code}>Code</a>
                                            <a target={"_blank"} href={"https://neverwinternights.github.io/norw/"}
                                               className={styles.portfolio__demo}>Demo</a>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.portfolio__column}>
                                    <div className={styles.portfolio__item}>
                                        <div className={styles.portfolio__image}><img src={photo2} alt=""/></div>
                                        <div className={styles.portfolio__title}>HTML/Adaptive site</div>
                                        <div className={styles.portfolio__footer}>
                                            <a target={"_blank"}
                                               href={"https://github.com/NeverwinterNights/new_agence"}
                                               className={styles.portfolio__code}>Code</a>
                                            <a target={"_blank"}
                                               href={"https://neverwinternights.github.io/new_agence/"}
                                               className={styles.portfolio__demo}>Demo</a>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.portfolio__column}>
                                    <div className={styles.portfolio__item}>
                                        <div className={styles.portfolio__image}><img src={photo3} alt=""/></div>
                                        <div className={styles.portfolio__title}>HTML/Adaptive site</div>
                                        <div className={styles.portfolio__footer}>
                                            <a target={"_blank"} href={"https://github.com/NeverwinterNights/Bacery"}
                                               className={styles.portfolio__code}>Code</a>
                                            <a target={"_blank"} href={"https://neverwinternights.github.io/Bacery/"}
                                               className={styles.portfolio__demo}>Demo</a>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.portfolio__column}>
                                    <div className={styles.portfolio__item}>
                                        <div className={styles.portfolio__image}><img src={photo7} alt=""/></div>
                                        <div className={styles.portfolio__title}>HTML/Adaptive site</div>
                                        <div className={styles.portfolio__footer}>
                                            <a target={"_blank"}
                                               href={"https://github.com/NeverwinterNights/cakesToPortf"}
                                               className={styles.portfolio__code}>Code</a>
                                            <a target={"_blank"}
                                               href={"https://neverwinternights.github.io/cakesToPortf/"}
                                               className={styles.portfolio__demo}>Demo</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};



