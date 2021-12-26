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
                        <img src="./img/social-facebook.svg" alt="facebook" />
                    </li>
                    <li>
                        <img src="./img/social-pinterest.svg" alt="pinterest" />
                    </li>
                    <li>
                        <img src="./img/social-instagram.svg" alt="instagram" />
                    </li>
                    <li>
                        <a href="https://www.youtube.com/channel/UCMffuhoOOYdMYF-8F_7RfHw">
                            <img src="./img/social-youtube.svg" alt="youtube" />
                        </a>

                    </li>
                    <li>
                        <img src="./img/social-twitter.svg" alt="twitter" />
                    </li>
                </ul>

            </div>
        </header>
    )
}

export default Header;
