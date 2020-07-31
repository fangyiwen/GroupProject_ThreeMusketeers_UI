import React from 'react';
import './App.css';

import Home from "./pages/Home"
import Sites from "./pages/Sites"
import SingleSite from "./pages/SingleSite"

import { Route, Switch } from "react-router-dom"

import NavBar from "./components/Navbar"

export default function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/sites" component={Sites} />
        <Route exact path="/sites/:slug" component={SingleSite} />
      </Switch>
    </div>);
}