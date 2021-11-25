import React from 'react';

import './App.css';
import Card from './components/Card';
import Header from './components/Header';
import Drawer from './components/Drawer';

const arr = [
    {
        "name": "Кожаный ремень ручной работы",
        "price": "12999",
        "imgUrl": "/img/items/1.jpg"
    },
    {
        "name": "Кожаная сумка ручной работы",
        "price": "15600",
        "imgUrl": "/img/items/2.jpg"
    },
    {
        "name": "Кожаный кошелек ручной работы",
        "price": "8999",
        "imgUrl": "/img/items/3.jpg"
    },
    {
        "name": "Кожаный кошелек ручной работы",
        "price": "8999",
        "imgUrl": "/img/items/3.jpg"
    },
    {
        "name": "Кожаный кошелек ручной работы",
        "price": "7999",
        "imgUrl": "/img/items/3.jpg"
    },
    {
        "name": "Кожаный кошелек ручной работы",
        "price": "6999",
        "imgUrl": "/img/items/3.jpg"
    },
    {
        "name": "Кожаный кошелек ручной работы",
        "price": "5999",
        "imgUrl": "/img/items/3.jpg"
    }
]

function App() {
    const [items, setItems] = React.useState([])
    const [cartItems, setCartItems] = React.useState([])
    const [cartOpened, setCartOpened] = React.useState(false);

    React.useEffect(() => {
        fetch("https://619e70b07f09d50017fd2b48.mockapi.io/items")
        .then(res => res.json())
        .then(json => setItems(json))
    }, [])

    const onAddToCart = (obj) => {
        let tmp = cartItems;
        tmp.push(obj);
        setCartItems(tmp);
    }

    return (
        <div className="wrapper clear">
            {cartOpened && <Drawer items={cartItems} onClickClose={() => setCartOpened(false)} />}
            <Header onClickCart={() => setCartOpened(true)} />
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
                <div className="d-flex flex-wrap">
                    {
                        items.map((item) => (
                            <Card
                                title={item.name}
                                price={item.price}
                                imgUrl={item.imgUrl}
                                onFavorite={() => console.log("тык сердечко")}
                                onPlus={(obj) => onAddToCart(obj)}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default App;
