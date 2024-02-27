import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { ReactNotifications } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { apiSlice } from './redux/apiSlice';
import songReducer from './redux/songs';
import searchReducer from './redux/search';

const config = {
    apiConfig: {
        url: 'http://127.0.0.1:5000/resources',
    },
};

const store = configureStore({
    reducer: {
        searchReducer: searchReducer,
        songReducer: songReducer,
        [apiSlice.reducerPath]: apiSlice.reducer,
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            thunk: {
                extraArgument: config,
            },
        }).concat(
            apiSlice.middleware
        ),
    devTools: true, // TODO: Prod-prep: disable devtools in production
});

const root = createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <ReactNotifications />
        <App />
    </Provider>,
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
