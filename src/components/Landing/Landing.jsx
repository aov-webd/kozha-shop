import React, { useEffect, useState } from 'react';
import { AppContext } from '../../App'
import styles from './Landing.module.scss';

function Landing() {
    const itemLink = "./img/caroucel/1.jpg"

    // const {
    //     searchValue,
    //     setSearchValue,
    //     onChangeSearchInput,
    //     isLoading
    // } = React.useContext(AppContext);

    const caroucelItems = [
        "./img/caroucel/1.jpg",
        "./img/caroucel/2.jpg",
        "./img/caroucel/3.jpg",
        "./img/caroucel/4.jpg",
        "./img/caroucel/5.jpg",
        "./img/caroucel/6.jpg",
        "./img/caroucel/7.jpg",
        "./img/caroucel/8.jpg"
    ];

    const [activeIndex, setActiveIndex] = useState(0);
    const [showCaroucelNavigation, setShowCaroucelNavigation] = useState(false)

    let incActiveIndex = () => { setActiveIndex(activeIndex === 7 ? 0 : activeIndex + 1) }
    let decActiveIndex = () => { setActiveIndex(activeIndex === 0 ? 7 : activeIndex - 1) }

    useEffect(() => {
        let interval = setInterval(() => {
            incActiveIndex();
        }, 10000);
        return () => clearInterval(interval)
    }, [activeIndex])

    return (
        <div
            onMouseEnter={() => setShowCaroucelNavigation(true)}
            onMouseLeave={() => setShowCaroucelNavigation(false)}
        >
            <section className={styles.caroucel}>
                {caroucelItems.map((item, index) => (
                    <img
                        key={index}
                        className={
                            styles.caroucelImg + ' ' +
                            (index === activeIndex ? '' : styles.invisible)}
                        src={item} alt={index} />
                ))}
                <div
                    className={(showCaroucelNavigation ? styles.showCaroucelNavigation : '') + ' ' + styles.dots}>
                    {caroucelItems.map((item, index) => (
                        <div
                            key={index}
                            onClick={() => setActiveIndex(index)}
                            className={index === activeIndex ? styles.activeDot : styles.inActiveDot}></div>
                    ))}
                </div>
                <div
                    className={
                        styles.caroucelArrowsContainer + ' ' +
                        (showCaroucelNavigation ? styles.showCaroucelNavigation : '')
                    }
                >
                    <img
                        onClick={decActiveIndex}
                        className={styles.caroucelArrow + ' ' + styles.arrowLeft}
                        src="./img/arrow-right.svg" alt="arrow" />
                </div>
                <div
                    className={
                        (showCaroucelNavigation ? styles.showCaroucelNavigation : '') + ' ' +
                        styles.caroucelArrowsContainerRight + ' ' +
                        styles.caroucelArrowsContainer
                    }
                >
                    <img
                        onClick={incActiveIndex}
                        className={styles.caroucelArrow + ' ' + styles.arrowRight}
                        src="./img/arrow-right.svg" alt="arrow" />
                </div>
            </section>
        </div>
    )
}

export default Landing;
;
