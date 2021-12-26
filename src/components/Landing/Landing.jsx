import React, { useEffect, useState } from 'react';
import { AppContext } from '../../App'
import styles from './Landing.module.scss';

function Landing() {
    const itemLink = "./img/caroucel/1.jpg"

    const {
        searchValue,
        setSearchValue,
        onChangeSearchInput,
        isLoading,
        updField
    } = React.useContext(AppContext);

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

    useEffect(() => {
        let interval = setInterval(() => {
            setActiveIndex(activeIndex === 7 ? 0 : activeIndex + 1)
        }, 5000);
        return () => clearInterval(interval)
    }, [activeIndex])

    return (
        <div>
            <section className={styles.caroucel}>
                {caroucelItems.map((item, index) => (
                    <img className={index === activeIndex ? styles.visible : styles.invisible} src={item} alt={index} />
                ))}
                <img src={caroucelItems[0]} alt="" />
            </section>

            {/* <section className=''>
                <img src="./img/caroucel/1.jpg" alt="" />
            </section> */}
        </div>
    )
}

export default Landing;
;
