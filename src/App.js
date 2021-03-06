import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header.jsx";
import Homepage from "./pages/HomePage/HomePage";
import Footer from "./components/Footer/Footer"
import Gallery from "./pages/Gallery/Gallery"
import Auth from "./pages/Auth/Auth"
import Catalogue from "./pages/Catalogue/Catalogue";
import Admin from "./pages/Admin";
import { Context } from './index'
import { observer } from "mobx-react-lite";
import { ADMIN_ROUTE, DEVICE_ROUTE } from "./utils/consts";
import DevicePage from "./pages/DevicePage/DevicePage";
import styles from './App.module.scss';

const App = observer(() => {
    const { user } = useContext(Context)

    return (
        <div className={styles.wrapper}>
            <div className={styles.content}>
                <Header />
                <Routes>
                    <Route path="/" exact element={<Homepage />} />
                    <Route path={DEVICE_ROUTE + '/:id'} exact element={<DevicePage />} />
                    <Route path="/gallery" exact element={<Gallery />} />
                    <Route path="/catalogue" exact element={<Catalogue />} />
                    <Route path="/login" exact element={<Auth />} />
                    {
                        process.env.REACT_APP_EN_REGISTRATION && (
                            <Route path="/registration" exact element={<Auth />} />)
                    }
                    {user.isAuth === true && <Route path={ADMIN_ROUTE} exact element={<Admin />} />}
                </Routes>
                <Footer />
            </div>
        </div>
    );
})

export default App;
