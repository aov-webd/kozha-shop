import React, { useEffect, useState } from 'react';
import styles from './Footer.module.scss';
import { Link } from "react-router-dom";

function Footer() {
    return (
        <div className={styles.footerContainer}>
            <div className={styles.footerAddress}>
                <Link to='/'>
                    <img className={styles.navbarCenter} src="/img/logo.png" alt="item" />
                </Link>
                <p>Прием заказов с 10:00 до 20:00 МСК</p>
                <div className={styles.address}>
                    <img src="./img/location.png" alt="" />
                    <p>Базируемся в Екатеринбурге, улица Евгения Савкова 4</p>
                </div>
                <div className={styles.address}>
                    <img src="./img/mail.png" alt="" />
                    <p>ivan-abdulin@rambler.ru</p>
                </div>
            </div>
            <div className={styles.footerPhones} >
                <p>Телефон/WhatsApp:</p>
                <p>+7 (922) 111-24-90 - Иван</p>
                <p>+7 (905) 806-62-61 - Юлия</p>
            </div>
            <div className={styles.footerSocials}>
                <a className={styles.socialLink} href="https://vk.com/abdulin_ekb">
                    <img src="./img/social-vk.svg" alt="vk" />
                    <p>ВКонтакте</p>
                </a>
                <a className={styles.socialLink} href="https://www.instagram.com/ABDULIN_Ekb">
                    <img src="./img/social-instagram.svg" alt="instagram" />
                    <p>Instagram</p>
                </a>
                <a className={styles.socialLink} href="https://www.youtube.com/channel/UCMffuhoOOYdMYF-8F_7RfHw">
                    <img src="./img/social-youtube.svg" alt="youtube" />
                    <p>Youtube</p>
                </a>
            </div>
        </div >
    )
}

export default Footer
