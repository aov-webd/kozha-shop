import React, { useEffect, useState } from 'react';
import { AppContext } from '../../App'
import styles from './Landing.module.scss';
import Caroucel from "../Caroucel/Caroucel";
import Footer from "../Footer/Footer"
function Landing() {
    return (
        <div>
            <Caroucel />
            <div className={styles.boxB}>
                <div className={styles.boxBLeft}>
                    <img src="./img/abdulov.jpg" alt="" />
                </div>
                <div className={styles.boxBRight}>
                    <p>Всем привет, меня зовут Абдулин Иван, я кожевенник!
                        Долгое время занимаюсь изготовлением различных изделий из натуральной кожи. Здесь вы сможете подобрать  для себя, своих близких, родных и друзей различные аксессуары из кожи, выполненные по вашим фантазиям и изготовленные вручную с пожизненной гарантией.
                        У меня для вас:
                    </p>
                    <ul>
                        <li>первосортная кожа,</li>
                        <li>прочные материалы</li>
                        <li>первоклассная фурнитура</li>
                        <li>а также максимальная отдача к каждому заказу.</li>
                    </ul>

                </div>
            </div>
            <div className={styles.featuresContainer}>
                <div>
                    <img src="./img/gallery/belt-male/1.jpg" alt="" />
                    <div className={styles.feature}>Доставка по всей России и странам СНГ Почтой России и транспортной компанией СДЭК.</div>
                </div>
                <div>
                    <img src="./img/gallery/passport/1.jpg" alt="" />
                    <div className={styles.feature}>Оплата производится онлайн. Заказ изделий по предоплате.</div>
                </div>
                <div>
                    <img src="./img/gallery/cardholder/1.jpg" alt="" />
                    <div className={styles.feature}>Срок изготовления. От 2-х дней.</div>
                </div>
                <div>
                    <img src="./img/gallery/charm/3.jpg" alt="" />
                    <div className={styles.feature}>Нанесение лазерной гравировки в ПОДАРОК!</div>
                </div>
            </div>
            <Footer />
        </div>

    )
}

export default Landing;
