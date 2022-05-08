import React, { useState, useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { Container, Card, Form, Button, Row } from 'react-bootstrap';
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import { registration, login } from '../../http/userAPI';
import { REGISTRATION_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from '../../utils/consts'
import { Context } from '../../index'
import styles from './Auth.module.scss';

const Auth = observer(() => {
    const { user } = useContext(Context)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const history = useNavigate()
    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTE

    const click = async () => {
        let data;
        if (isLogin) {
            data = await login(email, password)
            if (data) {
                user.setUser(data)
                user.setIsAuth(true)
            }
        } else {
            data = await registration(email, password)
        }
        history(SHOP_ROUTE)
    }

    return (
        <div className={styles.wrapper}>
            <h2 className='m-auto'>{isLogin ? 'Авторизация' : 'Регистрация'}</h2>
            <input
                className='mt-3'
                placeholder='Введите имя пользователья или e-mail'
                value={email}
                onChange={e => setEmail(e.target.value)}
            />
            <input
                className='mt-3 mb-3'
                placeholder='Введите пароль'
                value={password}
                onChange={e => setPassword(e.target.value)}
                type='password'
            />

            {
                process.env.REACT_APP_EN_REGISTRATION === 'true' && (
                    isLogin ?
                        <div>
                            Нет аккаунта?<NavLink to={REGISTRATION_ROUTE}>Зарегистрируйся!</NavLink>
                        </div>
                        :
                        <div>
                            Есть аккаунт? <NavLink to={LOGIN_ROUTE}>Войдите!</NavLink>
                        </div>
                )
            }
            <button
                onClick={click}
                className='button-reg mt-3 pl-3 pr-3'
            >
                {isLogin ? 'Войти' : 'Зарегистрироваться'}
            </button>
        </div >
    );
});

export default Auth
