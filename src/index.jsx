import "./index.scss"
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import UserStore from "./store/UserStore"
import DeviceStore from "./store/DeviceStore"
import { Provider } from 'react-redux'
import store from "./redux/store";

export const Context = React.createContext(null)

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Provider store={store}>
                <Context.Provider
                    value={{
                        user: new UserStore(),
                        device: new DeviceStore()
                    }}
                >
                    <App />
                </Context.Provider>
            </Provider>
        </Router>,
    </React.StrictMode>,
    document.getElementById("root")
);

