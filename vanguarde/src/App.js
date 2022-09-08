import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
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
