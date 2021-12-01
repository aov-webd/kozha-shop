import React from 'react';
import axios from 'axios';
import {
    Routes,
    Route
  } from "react-router-dom";

import './App.css';
import Header from './components/Header';
import Drawer from './components/Drawer';

import Home from './pages/Home';
import Favorites from './pages/Favorites';

// const arr = [
//     {
//         "id":"1",
//         "cart":"true",
//         "favorite":"false",
//         "name": "Кожаный ремень ручной работы",
//         "price": "12999",
//         "imgUrl": "/img/items/1.jpg"
//     },
//     {
//         "id":"2",
//         "cart":"false",
//         "favorite":"false",
//         "name": "Кожаная сумка ручной работы",
//         "price": "15600",
//         "imgUrl": "/img/items/2.jpg"
//     },
//     {
//         "id":"3",
//         "cart":"false",
//         "favorite":"false",
//         "name": "Кожаный кошелек ручной работы",
//         "price": "8999",
//         "imgUrl": "/img/items/3.jpg"
//     },
//     {
//         "id":"4",
//         "cart":"false",
//         "favorite":"false",
//         "name": "Кожаный кошелек ручной работы",
//         "price": "8999",
//         "imgUrl": "/img/items/3.jpg"
//     },
//     {
//         "id":"5",
//         "cart":"false",
//         "favorite":"false",
//         "name": "Кожаный кошелек ручной работы",
//         "price": "7999",
//         "imgUrl": "/img/items/3.jpg"
//     },
//     {
//         "id":"6",
//         "cart":"false",
//         "favorite":"false",
//         "name": "Кожаный кошелек ручной работы",
//         "price": "6999",
//         "imgUrl": "/img/items/3.jpg"
//     },
//     {
//         "id":"7",
//         "cart":"false",
//         "favorite":"false",
//         "name": "Кожаный кошелек ручной работы",
//         "price": "5999",
//         "imgUrl": "/img/items/3.jpg"
//     }
// ]

function App() {
    const [items, setItems] = React.useState([])
    const [cartOpened, setCartOpened] = React.useState(false);
    const [searchValue, setSearchValue] = React.useState('');

    React.useEffect(() => {
        axios.get("https://619e70b07f09d50017fd2b48.mockapi.io/items")
            .then(res => setItems(res.data));
        }, [])

    const updField = async (id, field) => {
        const resp = await axios.put(`https://619e70b07f09d50017fd2b48.mockapi.io/items/${id}`, field);

        axios.get("https://619e70b07f09d50017fd2b48.mockapi.io/items")
            .then(res => setItems(res.data));
    }

    const onChangeSearchInput = (event) => {
        console.log(event.target.value);
        setSearchValue(event.target.value)
    }

    return (
        <div className="wrapper clear">
            <Drawer
                cartOpened={cartOpened}
                items={items}
                onClickClose={() => setCartOpened(false)}
                onRemove={(id, field) => updField(id, field)}
            />

            <Header onClickCart={() => setCartOpened(true)} />

            <Routes>
            <Route path="/" exact element={
                    <Home
                        items={items}
                        searchValue={searchValue}
                        setSearchValue={setSearchValue}
                        onChangeSearchInput={onChangeSearchInput}
                        updField={updField}
                    />
                }/>
                <Route path="/favorites" exact element={
                    <Favorites
                        items={items}
                        updField={updField}
                    />
                }/>

            </Routes>

        </div>
    );
}

export default App;
