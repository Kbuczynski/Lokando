import React from 'react';
import ReactDOM from 'react-dom';
import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger';
import PromiseMiddleware from 'redux-promise-middleware';
import rootReducer from "./redux";

import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {Provider} from 'react-redux';
import Example from "./components/Example";
import Example2 from "./components/Example2";



const loggerMiddleware = createLogger();

const store =  createStore(
    rootReducer,
    applyMiddleware(thunk,loggerMiddleware, PromiseMiddleware)
);


function Router (){
    return (
        <Provider store={store}>
            <BrowserRouter basename={window.baseUrl}>
                <Switch>
                    <Route path = "/test" component={Example}/>
                    <Route path = "/" component={Example2}/>
                </Switch>
            </BrowserRouter>
        </Provider>
    )
}

if (document.getElementById('app')) {
    ReactDOM.render(<Router />, document.getElementById('app'));
}
