import { useNavigate } from "react-router-dom";
import styles from './Header.module.scss';
import { Context } from '../../index';
import { useContext } from "react";

function Header() {
    const { user } = useContext(Context)
    const history = useNavigate()
    return (
        <header className={styles.navbarContainer}>
            <ul className={styles.navbarLeft}>
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
            <div className={styles.navbarCenter} >
                <img onClick={() => history('/')} className={styles.navbarCenter} src="/img/logo.png" alt="item" />
            </div>
            <div className={styles.navbarRight}>
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
