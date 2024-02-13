import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { MainPage } from './components/main/MainPage';
import { SongDetails } from './components/track/SongDetails';
import { Header } from './components/shared/Header';
import { JokerFooter } from './components/shared/JokerFooter';

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
