import React, { useEffect, useState } from 'react';
import styles from './Caroucel.module.scss';

function Caroucel() {
    const caroucelItems = [
        "./img/caroucel/6.jpg",
        "./img/caroucel/3.jpg",
        "./img/caroucel/2.jpg",
        "./img/caroucel/4.jpg",
        "./img/caroucel/5.jpg",
        "./img/caroucel/1.jpg",
        "./img/caroucel/7.jpg",
        "./img/caroucel/8.jpg"
    ];

    const itemText = [
        "Изделия из кожи ручной работы несут частичку души мастера",
        "Ручная работа – метка высокого качества и красоты!",
        "Постоянным покупателям и подписчикам предоставляю скидку",
        "Не время ждать и думать, пора сделать заказ",
        "Будь в центре внимания, ведь кожаные изделия ручной работы всегда в тренде!",
        "Такой материал, как кожа считается классикой изыска!",
        "Натуральная кожа всегда была и будет в цене",
        "Изделия, созданные на основе натуральной кожи – это признак хорошего вкуса и выбор настоящих ценителей красивых вещей"
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
                    <div>
                        <img
                            key={index}
                            className={
                                styles.caroucelImg + ' ' +
                                (index === activeIndex ? '' : styles.invisibleImg)}
                            src={item} alt={index} />
                        <p className={
                            styles.caroucelText + ' ' +
                            (index === activeIndex ? '' : styles.invisibleText)}>{itemText[index]}</p>
                    </div>
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

export default Caroucel;
