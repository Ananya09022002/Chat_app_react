import React from "react";

import Join from './components/Join';
import Chat from './components/Chat';

import {BrowserRouter as Router , Route, Routes} from 'react-router-dom';

const App = () => {
    <Router>
        <Routes>
            <Route path="/" exact Component={Join} />
            <Route path="/chat" Component={Chat} />
        </Routes>
    </Router>
}

export default App;