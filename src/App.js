import React from 'react';
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages';
import SigninPage from './pages/signin';
import SearchPage from './pages/search';
import UserRegisterPage from './pages/userRegister';
import HomePage from './pages/Registry/index';

function App() {
    return (
        <Router>
            <Switch>
                <Route path='/' component={Home} exact />
                <Route path='/signin' component={SigninPage} exact />
                <Route path='/search' component={SearchPage} exact />
                <Route path='/userRegister' component={UserRegisterPage} exact />
                <Route path='/homePage' component={HomePage} exact />
            </Switch>
        </Router>
    )
}

export default App;