import { Link, Navigate, useNavigate } from "react-router-dom";
import styles from './Header.module.scss';
import { Context } from '../../index';
import { useContext } from "react";

function Header(props) {
    const { user } = useContext(Context)
    const history = useNavigate()
    return (
        <div>
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
                    {/* <li>
                        Выкройки
                    </li> */}
                </ul>
                <div className={styles.navbarCenter} >
                    <Link to='/'>
                        <img className={styles.navbarCenter} src="/img/logo.png" alt="item" />
                    </Link>
                </div>
                <div className={styles.navbarRight}>
                    <ul>
                        <li>
                            <a href="https://vk.com/abdulin_ekb" target="_blank">
                                <img src="./img/social-vk.svg" alt="vk" />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/ABDULIN_Ekb" target="_blank">
                                <img src="./img/social-instagram.svg" alt="instagram" />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.youtube.com/channel/UCMffuhoOOYdMYF-8F_7RfHw" target="_blank">
                                <img src="./img/social-youtube.svg" alt="youtube" />
                            </a>
                        </li>
                        <li>
                            <img onClick={() => { user.isAuth ? history('/admin') : history('/login') }} src="/img/user.svg" alt="user" />
                        </li>
                    </ul>
                </div>
            </header>
            <div className={styles.headerLine}></div>
        </div>

    )
}

export default Header;
