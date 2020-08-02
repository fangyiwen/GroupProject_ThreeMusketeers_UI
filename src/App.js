import React from 'react';
import './App.css';
import NavBar from "./components/Navbar"
import Home from "./pages/Home"
import Sites from "./pages/Sites"
import Search from "./pages/Search"
import { Route, Switch } from "react-router-dom"

export default function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/search" component={Search} />
        <Route exact path="/sites" component={Sites} />
      </Switch>
    </div>);
}