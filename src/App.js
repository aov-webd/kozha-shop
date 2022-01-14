import React from "react";
import axios from "axios";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import Header from "./components/Header/Header";
import Drawer from "./components/Drawer";
import Landing from "./components/Landing/Landing";
import Favorites from "./pages/Favorites";
import Footer from "./components/Footer/Footer"
import Gallery from "./components/Gallery/Gallery"

export const AppContext = React.createContext({});

function App() {
    const [items, setItems] = React.useState([]);
    const [cartOpened, setCartOpened] = React.useState(false);
    const [searchValue, setSearchValue] = React.useState("");
    const [isLoading, setIsLoading] = React.useState(true);

    React.useEffect(() => {
        async function fetchData() {
            const itemsResponse = await axios.get(
                "https://619e70b07f09d50017fd2b48.mockapi.io/items"
            );
            setItems(itemsResponse.data);
            setIsLoading(false);
        }
        fetchData();
    }, []);

    const updField = async (id, field) => {
        try {
            await axios.put(
                `https://619e70b07f09d50017fd2b48.mockapi.io/items/${id}`,
                field
            );
            axios
                .get("https://619e70b07f09d50017fd2b48.mockapi.io/items")
                .then((res) => setItems(res.data));
        } catch (error) {
            console.log(error);
        }
    };

    const onChangeSearchInput = (event) => {
        setSearchValue(event.target.value);
    };

    return (
        <AppContext.Provider
            value={{
                items,
                updField,
                isLoading,
                searchValue,
                setSearchValue,
                onChangeSearchInput,
                cartOpened,
                setCartOpened,
            }}
        >
            <div className="wrapper clear">
                <Drawer />
                <Header
                    onClickCart={() => setCartOpened(true)}
                />
                <Routes>
                    <Route path="/" exact element={<Landing />} />
                    <Route path="/favorites" exact element={<Favorites />} />
                    <Route path="/gallery" exact element={<Gallery />} />
                </Routes>
                <Footer />
            </div>
        </AppContext.Provider>
    );
}

export default App;
