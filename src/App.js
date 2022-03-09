import React, { useContext, useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Landing from "./pages/Landing/Landing";
import Footer from "./components/Footer/Footer"
import Gallery from "./pages/Gallery/Gallery"
import Auth from "./pages/Auth/Auth"
import Catalogue from "./pages/Catalogue";
import Admin from "./pages/Admin";
import { Context } from './index'
import { observer } from "mobx-react-lite";
import { Spinner } from "react-bootstrap";
import { check } from "./http/userAPI";
import { ADMIN_ROUTE, DEVICE_ROUTE } from "./utils/consts";
import DevicePage from "./pages/DevicePage/DevicePage";

const App = observer(() => {
    const { user } = useContext(Context)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        check()
            .then(data => {
                user.setUser(true)
                user.setIsAuth(true)
            })
            .catch(e =>
                console.log(e.message)
            )
            .finally(() => setLoading(false))
    }, [])

    if (loading) {
        return <Spinner animation={"grow"} />
    }

    return (
        <div>
            <Header />
            <Routes>
                <Route path="/" exact element={<Landing />} />
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
    );
})

export default App;
