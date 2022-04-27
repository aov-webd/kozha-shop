import React, { useEffect, useState } from 'react';
import styles from './Caroucel.module.scss';
import CaroucelItems from "../../Caroucel.json"

function Caroucel() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [showCaroucelNavigation, setShowCaroucelNavigation] = useState(false)

    useEffect(() => setTimeout(incActiveIndex, 10000), [activeIndex])

    let incActiveIndex = () => setActiveIndex(activeIndex === 7 ? 0 : activeIndex + 1);
    let decActiveIndex = () => setActiveIndex(activeIndex === 0 ? 7 : activeIndex - 1)

    const renderItems = CaroucelItems.map((item, index) => (
        <div className={styles.caroucelEntry + ' ' + (index === activeIndex ? '' : styles.invisibleImg)} key={index}>
            <img src={item.image} alt={index} />
            <p>{item.text}</p>
        </div>
    ))

    return (
        <div
            className={styles.caroucel}
            onMouseEnter={() => setShowCaroucelNavigation(true)}
            onMouseLeave={() => setShowCaroucelNavigation(false)}>
            {renderItems}
            <div
                className={(showCaroucelNavigation && styles.showCaroucelNavigation) + ' ' + styles.dots}>
                {CaroucelItems.map((item, index) => (
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
                    (showCaroucelNavigation && styles.showCaroucelNavigation) + ' ' +
                    styles.caroucelArrowsContainerRight + ' ' +
                    styles.caroucelArrowsContainer
                }
            >
                <img
                    onClick={incActiveIndex}
                    className={styles.caroucelArrow + ' ' + styles.arrowRight}
                    src="./img/arrow-right.svg" alt="arrow" />
            </div>
        </div>
    )
}

export default Caroucel;
