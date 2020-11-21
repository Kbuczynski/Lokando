import React from "react";
import ReactDOM from "react-dom";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";
import PromiseMiddleware from "redux-promise-middleware";
import rootReducer from "./redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";

import Home from "./views/Home";
import CreateAccount from "./views/CreateAccount";
import SearchResults from "./views/SearchResults";
import ScrollTop from "./components/ScrollTop";

import { API } from "../js/utils/ApiClass";
import RegisterCompany from "./views/RegisterCompany";
window.API = API;

const loggerMiddleware = createLogger();

const store = createStore(
    rootReducer,
    applyMiddleware(thunk, loggerMiddleware, PromiseMiddleware)
);

function Router() {
    return (
        <Provider store={store}>
            <BrowserRouter basename={window.baseUrl}>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route
                        exact
                        path="/utworz-konto"
                        component={CreateAccount}
                    />
                    <Route exact path="/szukaj" component={SearchResults} />
                    <Route
                        exact
                        path="/uzupelnij-profil-firmy"
                        component={RegisterCompany}
                    />
                </Switch>
                <ScrollTop />
            </BrowserRouter>
        </Provider>
    );
}

if (document.getElementById("app")) {
    ReactDOM.render(<Router />, document.getElementById("app"));
}
