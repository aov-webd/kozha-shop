import { useNavigate } from "react-router-dom";
import styles from './Header.module.scss';
import { Context } from '../../index';
import { useContext, useState } from "react";
import useWindowSize from '../../hooks/userWindowSize.ts'

function Header() {
    const { user } = useContext(Context)
    const history = useNavigate()
    const [mobileNavVisible, setMobileNavVisible] = useState(false);
    const [width, height] = useWindowSize();

    return (
        <header className={styles.navContainer}>
            <span>Window size: {width} x {height}</span>
            <div onClick={() => setMobileNavVisible(!mobileNavVisible)} className={styles.hamburger}>
                <img src="./img/hamburger-menu-icon.svg" alt="" />
            </div>
            <ul className={styles.navRoutes}>
                <li onClick={() => history('/')}>
                    Главная
                </li>
                <li onClick={() => history('/catalogue')}>
                    Каталог
                </li>
                <li onClick={() => history('/gallery')}>
                    Галерея
                </li>
            </ul>
            <div className={styles.navLogo} >
                <img onClick={() => history('/')} className={styles.navbarCenter} src="/img/logo.png" alt="item" />
            </div>
            <div className={styles.navSocials}>
                <a href="https://vk.com/abdulin_ekb" target="_blank">
                    <img src="./img/social-vk.svg" alt="vk" />
                </a>
                <a href="https://www.instagram.com/ABDULIN_Ekb" target="_blank">
                    <img src="./img/social-instagram.svg" alt="instagram" />
                </a>
                <a href="https://www.youtube.com/channel/UCMffuhoOOYdMYF-8F_7RfHw" target="_blank">
                    <img src="./img/social-youtube.svg" alt="youtube" />
                </a>
                <img onClick={() => { user.isAuth ? history('/admin') : history('/login') }} src="/img/user.svg" alt="user" />
            </div>
        </header>
    )
}

export default Header;
