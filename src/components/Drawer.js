import React from 'react';
import { AppContext } from '../App'

function Drawer() {

    const {
        cartOpened,
        items,
        setCartOpened,
        updField
    } = React.useContext(AppContext);

    let total = items.reduce((prev, item) => prev + (item.cart === 'true' && +item.price), 0);
    return cartOpened && (
        <div className="overlay">
            <div className="drawer">
                <h2 className="d-flex justify-between mb-20">Корзина
                    <img onClick={() => setCartOpened(false)} className="removeBtn cu-p" src="/img/btn-remove.svg" alt="Remove" />
                </h2>

                {(items.length > 0) ? (
                    <div>
                        <div className="items">
                            {items.filter((item) => item.cart === 'true').map((obj) => {
                                return (
                                    <div className="cartItem mb-20 d-flex align-center">
                                        <div
                                            style={{ backgroundImage: `url(${obj.imgUrl})` }}
                                            className="cartItemImg">
                                        </div>
                                        <div className="mr-20 flex">
                                            <p>{obj.title}</p>
                                            <b>{obj.price} руб.</b>
                                        </div>
                                        <img
                                            onClick={() => updField(obj.id, { 'cart': 'false' })}
                                            className="removeBtn"
                                            src="/img/btn-remove.svg"
                                            alt="Remove"
                                        />
                                    </div>
                                )
                            })}
                        </div>
                        <div className="cartTotalBlock">
                            <ul>
                                <li className="d-flex">
                                    <span>Итого:</span>
                                    <div></div>
                                    <b>{total}</b>
                                </li>
                                <li className="d-flex">
                                    <span>НДС 20%:</span>
                                    <div></div>
                                    <b>{(total * 0.2).toFixed(2)}</b>
                                </li>
                            </ul>
                            <button className="greenButton">Оформить заказ<img src="/img/arrow.svg" alt="Arrow" /></button>
                        </div>
                    </div>
                ) : (
                    <div className="cartEmpty d-flex align-center justify-center flex-column flex">
                        <h2>Корзина пустая</h2>
                        <p class='opacity-6'>Добавьте хотя бы одно изделие чтобы сделать заказ</p>
                    </div>
                )}



            </div>
        </div>
    )
}

export default Drawer
