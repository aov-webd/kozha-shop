import React, { useEffect, useState } from 'react';
import { AppContext } from '../../App'
import styles from './Landing.module.scss';
import Caroucel from "../Caroucel/Caroucel";

function Landing() {
    return (
        <div>
            <Caroucel />
            <div className={styles.boxA}>
                <div className={styles.boxALeft}>
                    <img src="./img/gallery/wallet-f/8.jpg" alt="" />
                </div>
                <div className={styles.boxARight}>
                    <img src="./img/gallery/wallet-f/3.jpg" alt="" />
                </div>
            </div>
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
            <div className={styles.capabilitiesContainer}>
                <div>
                    <p>Доставка по всей России и странам СНГ Почтой России и транспортной компанией СДЭК.</p>
                </div>
                <div>
                    <p>Оплата производится онлайн. Заказ изделий по предоплате.</p>
                </div>
                <div>
                    <p>Срок изготовления. От 2-х дней.</p>
                </div>
                <div>
                    <p>Нанесение лазерной гравировки в ПОДАРОК!</p>
                </div>
            </div>
            <footer>
                <div className={styles.footerGeneral}></div>
            </footer>
        </div>

    )
}

export default Landing;
