import { Link } from "react-router-dom";
import styles from './Header.module.scss';

function Header(props) {
    return (
        <header className={styles.navbarContainer}>
            <ul className={styles.navbarLeft}>
                <li>
                    Домой
                </li>
                <li>
                    Каталог
                </li>
                <li>
                    Галерея
                </li>
                <li>
                    Выкройки
                </li>
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
        </header>
    )
}

export default Header;
