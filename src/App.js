import './App.css';

function App() {
  return (
    <div className="wrapper clear">
        <div className="overlay">
            <div className="drawer">
                <h2 className="mb-20">Корзина</h2>

                <div className="items">
                    <div className="cartItem mb-20 d-flex align-center">
                        <div
                            style={{backgroundImage: 'url(/img/items/1.jpg)'}}
                            className="cartItemImg">
                        </div>
                        <div className="mr-20 flex">
                            <p className="mb-5">Кожаная сумка ручной работы</p>
                            <b>12 999 руб.</b>
                        </div>
                        <img className="removeBtn" src="/img/btn-remove.svg" alt="Remove" />
                    </div>
                    <div className="cartItem mb-20 d-flex align-center">
                        <div
                            style={{backgroundImage: 'url(/img/items/1.jpg)'}}
                            className="cartItemImg">
                        </div>
                        <div className="mr-20 flex">
                            <p className="mb-5">Кожаная сумка ручной работы</p>
                            <b>12 999 руб.</b>
                        </div>
                        <img className="removeBtn" src="/img/btn-remove.svg" alt="Remove" />
                    </div>
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
        <header className="d-flex justify-between align-center p-40">
            <div className="d-flex align-center">
                <img width={40} height={40} src="/img/leather.jpg" />
                <div>
                    <h3 className="text-uppercase">KOZHA SHOP</h3>
                    <p className="opacity-5">Лавка кожевника</p>
                </div>
            </div>
            <ul className="d-flex">
                <li className="mr-30">
                    <img width={18} heigth={18} src="/img/cart.png" />
                    <span>1205 руб.</span>
                </li>
                <li>
                <img width={18} heigth={18} src="/img/user.svg" />

                </li>
            </ul>
        </header>
        <div className="content p-40">
            <div className="mb-40  d-flex align-center justify-between">
                <h1 className="">Все изделия</h1>
                <div className="search-block d-flex">
                    <div className="ml-10 d-flex align-center">
                        <img width={12} height={12} src="/img/search.png" alt="Search" />
                    </div>

                    <input placeholder="Поиск ..." />
                </div>
            </div>
            <div className="d-flex">
                <div className="card">
                    <div className="favorite">
                        <img src="/img/heart-unliked.svg" alt="Unliked" />
                    </div>
                    <img width={133} height={112} src="/img/items/1.jpg" alt="item"/>
                    <h5>Кожаная сумка ручной работы</h5>
                    <div className="d-flex justify-between align-center">
                        <div className="d-flex flex-column">
                            <span>Цена:</span>
                            <b>12 999 руб.</b>
                        </div>
                        <div className="button">
                            <img width={32} height={32} src="/img/btn-unchecked.svg" />
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="favorite">
                        <img src="/img/heart-unliked.svg" alt="Unliked" />
                    </div>
                    <img width={133} height={112} src="/img/items/2.jpg" alt="item"/>
                    <h5>Кожаная сумка ручной работы</h5>
                    <div className="d-flex justify-between align-center">
                        <div className="d-flex flex-column">
                            <span>Цена:</span>
                            <b>12 999 руб.</b>
                        </div>
                        <div className="button">
                            <img width={32} height={32} src="/img/btn-unchecked.svg" />
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="favorite">
                        <img src="/img/heart-unliked.svg" alt="Unliked" />
                    </div>
                    <img width={133} height={112} src="/img/items/3.jpg" alt="item"/>
                    <h5>Кожаная сумка ручной работы</h5>
                    <div className="d-flex justify-between align-center">
                        <div className="d-flex flex-column">
                            <span>Цена:</span>
                            <b>12 999 руб.</b>
                        </div>
                        <div className="button">
                            <img width={32} height={32} src="/img/btn-unchecked.svg" />
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="favorite">
                        <img src="/img/heart-unliked.svg" alt="Unliked" />
                    </div>
                    <img width={133} height={112} src="/img/items/1.jpg" alt="item"/>
                    <h5>Кожаная сумка ручной работы</h5>
                    <div className="d-flex justify-between align-center">
                        <div className="d-flex flex-column">
                            <span>Цена:</span>
                            <b>12 999 руб.</b>
                        </div>
                        <div className="button">
                            <img width={32} height={32} src="/img/btn-unchecked.svg" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default App;
