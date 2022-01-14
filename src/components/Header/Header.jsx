import { Link } from "react-router-dom";
import styles from './Header.module.scss';

function Header(props) {
    return (
        <div>
            <header className={styles.navbarContainer}>
                <ul className={styles.navbarLeft}>
                    <li>
                        <Link to='/'>
                            Главная
                        </Link>
                    </li>
                    <li>
                        Каталог
                    </li>
                    <li>
                        <Link to='/gallery'>
                            Галерея
                        </Link>
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
                            <Link to="/favorites">
                                <img src="/img/heart.svg" alt="user" />
                            </Link>
                        </li>
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
                    </ul>
                </div>
            </header>
            <div className={styles.headerLine}></div>
        </div>

    )
}

export default Header;
