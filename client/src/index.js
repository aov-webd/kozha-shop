import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
// import "macro-css";
import { BrowserRouter as Router } from "react-router-dom";
import UserStore from "./store/UserStore"
import DeviceStore from "./store/DeviceStore"

export const Context = React.createContext(null)

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Context.Provider
                value={{
                    user: new UserStore(),
                    device: new DeviceStore()
                }}
            >
                <App />
            </Context.Provider>
        </Router>
    </React.StrictMode>,
    document.getElementById("root")
);

reportWebVitals();
