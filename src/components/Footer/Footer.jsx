import React, { useEffect, useState } from 'react';
import styles from './Footer.module.scss';
import { Link } from "react-router-dom";

function Footer() {
    return (
        <div>
            <div className={styles.footerLine}></div>
            <div className={styles.footerContainer}>
                <div className={styles.contacts}>
                    <Link to='/'>
                        <img className={styles.navbarCenter} src="/img/logo.png" alt="item" />
                    </Link>
                    <p>Прием заказов с 10:00 до 20:00 МСК</p>
                    <p>Базируемся в Екатеринбурге, улица Евгения Савкова 4</p>
                    <p>ivan-abdulin@rambler.ru</p>
                </div>
                <div>
                    <p>Телефон/WA:</p>
                    <p> +7 (922) 111-24-90 - Иван</p>
                    <p>+7 (905) 806-62-61 - Юлия</p>
                </div>
                <div className={styles.navbarRight}>
                    <ul>
                        <li>
                            <Link to="/favorites">
                                <img src="/img/heart.svg" alt="user" />
                            </Link>
                        </li>
                        <li>
                            <a href="https://vk.com/abdulin_ekb">
                                <img src="./img/social-vk.svg" alt="vk" />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/ABDULIN_Ekb">
                                <img src="./img/social-instagram.svg" alt="instagram" />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.youtube.com/channel/UCMffuhoOOYdMYF-8F_7RfHw">
                                <img src="./img/social-youtube.svg" alt="youtube" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div >
        </div>
    )
}

export default Footer
