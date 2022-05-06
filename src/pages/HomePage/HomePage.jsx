import React from 'react';
import styles from './HomePage.module.scss';
import Caroucel from "../../components/Caroucel/Caroucel";
import { useSelector, useDispatch } from 'react-redux';
import { actions } from '../../redux/store';

function Homepage() {
    const counter = useSelector((state) => state.counter)
    const dispatch = useDispatch()
    const inc = () => dispatch(actions.increment())
    const dec = () => dispatch(actions.decrement())
    return (
        <div className={styles.wrapper}>
            <Caroucel />
            <div className={styles.boxB}>
                <div className={styles.boxBLeft}>
                    <img src="./img/abdulin.jpg" alt="" />
                </div>
                <div className={styles.boxBRight}>
                    <p>Всем привет, меня зовут Абдулин Иван, я кожевенник!
                        Долгое время занимаюсь изготовлением различных изделий из натуральной кожи.
                        Здесь вы сможете подобрать  для себя, своих близких, родных и друзей различные аксессуары из кожи,
                        выполненные по вашим фантазиям и изготовленные вручную с пожизненной гарантией.
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
                <div className={styles.featuresSubContainer}>
                    <div className={styles.feature}>
                        <img src="./img/landing/1_small.png" alt="" />
                        <div>
                            <p>Доставка по всей России и странам СНГ Почтой России и транспортной компанией СДЭК.</p>
                        </div>
                    </div>
                    <div className={styles.feature}>
                        <img src="./img/landing/2_small.png" alt="" />
                        <div>
                            <p>Заказ изделий по предоплате.</p>
                        </div>
                    </div>
                </div>
                <div className={styles.featuresSubContainer}>
                    <div className={styles.feature}>
                        <img src="./img/landing/3_small.png" alt="" />
                        <div>
                            <p>Срок изготовления.</p>
                            <p>От 2-х дней.</p>
                        </div>
                    </div>
                    <div className={styles.feature}>
                        <img src="./img/landing/4_small.png" alt="" />
                        <div>
                            <p>Нанесение лазерной гравировки в ПОДАРОК!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Homepage;
