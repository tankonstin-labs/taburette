import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';

import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import MainPage from './components/MainPage';
import {JokerFooter} from './components/JokerFooter';
import {Header} from './components/Header';

function App() {
    return (
        <Router>
            <Header/>
            <MainPage/>
            <JokerFooter/>
        </Router>
    );
}

export default App;
