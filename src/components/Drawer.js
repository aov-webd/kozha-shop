function Drawer({onClickClose, items = []}) {
    return (
        <div className="overlay">
            <div className="drawer">
                <h2 className="d-flex justify-between mb-20">Корзина
                    <img onClick={onClickClose} className="removeBtn cu-p" src="/img/btn-remove.svg" alt="Remove" />
                </h2>

                <div className="items">
                    {items.map((obj) => {
                        // console.log(obj);
                        return (
                            <div className="cartItem mb-20 d-flex align-center">
                                <div
                                    style={{backgroundImage: `url(${obj.imgUrl})`}}
                                    className="cartItemImg">
                                </div>
                                <div className="mr-20 flex">
                                    <p className="mb-5">Кожаная сумка ручной работы</p>
                                    <b>{obj.price} руб`.</b>
                                </div>
                                <img className="removeBtn" src="/img/btn-remove.svg" alt="Remove" />
                            </div>
                        )
                    })}
                </div>
                <div className="cartTotalBlock">
                    <ul>
                        <li className="d-flex">
                            <span>Итого:</span>
                            <div></div>
                            <b>21 498 руб.</b>
                        </li>
                        <li className="d-flex">
                            <span>Налог 5%:</span>
                            <div></div>
                            <b>1074 руб.</b>
                        </li>
                    </ul>
                    <button className="greenButton">Оформить заказ<img src="/img/arrow.svg" alt="Arrow" /></button>
                </div>
            </div>
        </div>
    )
}

export default Drawer
