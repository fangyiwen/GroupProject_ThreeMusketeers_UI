import React from 'react';
import './App.css';

import Home from "./pages/Home"
import Sites from "./pages/Sites"
import SingleSite from "./pages/SingleSite"
import Error from "./pages/Error"

import { Route, Switch } from "react-router-dom"

function App() {
  return (
    <div>
    <Route exact path="/" component={Home}/>
    <Route path="/sites" component={Sites}/>
    <Route path="/single-site" component={SingleSite}/>

    </div>);
}

export default App;
