import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';

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
