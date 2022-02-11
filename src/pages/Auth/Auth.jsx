import React, { useState, useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { Container, Card, Form, Button, Row } from 'react-bootstrap';
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import { registration, login } from '../../http/userAPI';
import { REGISTRATION_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from '../../utils/consts'
import { Context } from '../../index'

const Auth = observer(() => {
    const { user } = useContext(Context)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const history = useNavigate()

    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTE

    const click = async () => {
        try {
            let data;
            if (isLogin) {
                data = await login(email, password)
            } else {
                data = await registration(email, password)
            }
            // console.log(data)
            user.setUser(data)
            user.setIsAuth(true)
            history(SHOP_ROUTE)
            // console.log(user.isAuth)
        } catch (error) {
            alert(error.response.data.message)
        }
    }

    return (
        <Container
            className='d-flex justify-content-center align-items-center'
            style={{ height: window.innerHeight - 54 }}
        >
            <Card style={{ width: 600 }} className='p-3'>
                <h2 className='m-auto'>{isLogin ? 'Авторизация' : 'Регистрация'}</h2>
                <Form>
                    <Form.Control
                        className='mt-3'
                        placeholder='Введите имя пользователья или e-mail'
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <Form.Control
                        className='mt-3'
                        placeholder='Введите пароль'
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        type='password'
                    />
                    <Row className='display-flex justify-content-between mt-3 pl-3 pr-3'>
                        {isLogin ?
                            <div>
                                Нет аккаунта? <NavLink to={REGISTRATION_ROUTE}>Зарегистрируйся!</NavLink>
                            </div>
                            :
                            <div>
                                Есть аккаунт? <NavLink to={LOGIN_ROUTE}>Войдите!</NavLink>
                            </div>
                        }
                        <Button
                            variant={'outline-success'}
                            onClick={click}
                        >
                            {isLogin ? 'Войти' : 'Зарегистрироваться'}
                        </Button>
                    </Row>
                </Form>
            </Card>
        </Container >
    );
});

export default Auth
