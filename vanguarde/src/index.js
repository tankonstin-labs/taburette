import React from 'react';
import {createRoot} from 'react-dom/client';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import {Provider} from 'react-redux';
// TODO: get rid of deprecated functions usage
import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import songReducer from './redux/songs';
import searchReducer from './redux/search';

// TODO: restore notifications functionality
// import ReactNotification from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';

const config = {
    apiConfig: {
        url: 'http://127.0.0.1:5000/resources',
    },
};

const rootReducer = {
    searchReducer: searchReducer,
    songReducer: songReducer,
};
const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware({
        thunk: {
            extraArgument: config,
        },
    }),
    devTools: true, // TODO: disable in production
});

const root = createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        {/* TODO: restore notifications functionality */}
        {/* <ReactNotification /> */}
        <App />
    </Provider>,
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
