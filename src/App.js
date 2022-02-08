import React, { useContext } from "react";
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

const App = observer(() => {
    const { user } = useContext(Context)
    return (
        <div>
            <Header />
            <Routes>
                <Route path="/" exact element={<Landing />} />
                <Route path="/gallery" exact element={<Gallery />} />
                <Route path="/catalogue" exact element={<Catalogue />} />
                <Route path="/login" exact element={<Auth />} />
                <Route path="/registration" exact element={<Auth />} />
                {user.isAuth === true && <Route path="/admin" exact element={<Admin />} />}
            </Routes>
            <Footer />
        </div>
    );
})

export default App;
