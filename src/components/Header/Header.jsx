import { useNavigate } from "react-router-dom";
import styles from './Header.module.scss';
import { Context } from '../../index';
import { useContext, useEffect, useState } from "react";
import useWindowSize from '../../hooks/userWindowSize.ts'

function Header() {
    const { user } = useContext(Context)
    const history = useNavigate()
    const [mobileNavVisible, setMobileNavVisible] = useState(false);
    const [mobileMode, setMobileMode] = useState(false);
    const [width, height] = useWindowSize();

    useEffect(() => {
        setMobileMode(width <= 700)
    }, [width])

    const toggleMobileNav = () => {
        setMobileNavVisible(!mobileNavVisible)
    }

    const navRoutes = (
        <ul className={styles.navRoutes}>
            <li onClick={() => { history('/'); setMobileNavVisible(false) }}>
                Главная
            </li>
            <li onClick={() => { history('/catalogue'); setMobileNavVisible(false) }}>
                Каталог
            </li>
            <li onClick={() => { history('/gallery'); setMobileNavVisible(false) }}>
                Галерея
            </li>
        </ul>
    )

    const navSocials = (
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
    )

    const mobileNav = (
        <div className={styles.mobileNav + ' ' + (mobileNavVisible && styles.mobileNavVisible)}>
            {navRoutes}
            {navSocials}
        </div>
    )

    return (
        <>
            <header className={styles.navContainer}>
                <div onClick={toggleMobileNav} className={styles.hamburger}>
                    <img src="./img/hamburger-menu-icon.svg" alt="" />
                </div>
                {!mobileMode && navRoutes}
                <div className={styles.navLogo} >
                    <img onClick={() => history('/')} className={styles.navbarCenter} src="/img/logo.png" alt="item" />
                </div>
                {!mobileMode && navSocials}
            </header>
            {mobileMode && mobileNav}
        </>
    )
}

export default Header;
