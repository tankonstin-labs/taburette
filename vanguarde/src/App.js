import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { Header } from './components/Header';
import { MainPage } from './components/MainPage';
import { SongDetails } from './components/SongDetails';
import { JokerFooter } from './components/JokerFooter';

function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route exact path='/' element={ <MainPage /> }/>
                <Route path='/s/:songId' element={ <SongDetails /> }/>
            </Routes>
            <JokerFooter />
        </Router>
    );
}

export default App;
