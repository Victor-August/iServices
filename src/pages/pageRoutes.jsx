import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

import Splash from './Splash/splash.jsx';
import Home from './Home/home.jsx';
import Servicos from './Servicos/servicos.jsx';


 export default function PagesRoutes() {
   return(
  <Router>
    <Switch>
      <Route path="/splash" component={Splash} />
      <Route path="/home" component={Home} />
      <Route path="/servicos" component={Servicos} />
    </Switch>
  </Router>
   )
 }
