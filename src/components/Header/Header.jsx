import { Link, Navigate, useNavigate } from "react-router-dom";
import styles from './Header.module.scss';
import { Context } from '../../index';
import { useContext } from "react";

function Header() {
    const { user } = useContext(Context)
    const history = useNavigate()
    return (
        <div
            style={{
                background: '#ffffff',
                maxWidth: '1440px',
                margin: 'auto'
            }}>
            <header className={styles.navbarContainer}>
                <div className={styles.navbarLeft}>
                    <div onClick={() => history('/')}>
                        Главная
                    </div>
                    <div onClick={() => history('/catalogue')}>
                        Каталог
                    </div>
                    <div onClick={() => history('/gallery')}>
                        Галерея
                    </div>
                    {/* <li>
                        Выкройки
                    </li> */}
                </div>
                <div className={styles.navbarCenter} >
                    <Link to='/'>
                        <img className={styles.navbarCenter} src="/img/logo.png" alt="item" />
                    </Link>
                </div>
                <div className={styles.navbarRight}>
                    <div>
                        <a href="https://vk.com/abdulin_ekb" target="_blank">
                            <img src="./img/social-vk.svg" alt="vk" />
                        </a>
                    </div>
                    <div>
                        <a href="https://www.instagram.com/ABDULIN_Ekb" target="_blank">
                            <img src="./img/social-instagram.svg" alt="instagram" />
                        </a>
                    </div>
                    <div>
                        <a href="https://www.youtube.com/channel/UCMffuhoOOYdMYF-8F_7RfHw" target="_blank">
                            <img src="./img/social-youtube.svg" alt="youtube" />
                        </a>
                    </div>
                    <div>
                        <img onClick={() => { user.isAuth ? history('/admin') : history('/login') }} src="/img/user.svg" alt="user" />
                    </div>
                </div>
            </header>
            <div className={styles.headerLine}></div>
        </div>

    )
}

export default Header;
