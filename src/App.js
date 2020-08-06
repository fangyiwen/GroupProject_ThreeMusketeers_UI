import React, { useState, useCallback }from 'react';
import './App.css';
import NavBar from "./components/Navbar"
import Home from "./pages/Home"
import Sites from "./pages/Sites"
import Search from "./pages/Search"
import { Route, Switch } from "react-router-dom"
import Auth from "./pages/Auth";
import {AuthContext} from "./components/Context/auth-context";
import Redirect from "react-router-dom/es/Redirect";

export default function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const login = useCallback(() => {
        setIsLoggedIn(true);
    }, []);

    const logout = useCallback(() => {
        setIsLoggedIn(false);
    }, []);

    let routes;
    if (isLoggedIn) {
        routes = (
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/search" component={Search} />
                <Route exact path="/sites" component={Sites} />
                <Redirect to="/" />
            </Switch>
        );
    } else {
        routes = (
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/search" component={Search} />
                <Route exact path="/sites" component={Sites} />
                <Route exact path="/auth" component={Auth} />
                <Redirect to="/auth" />
            </Switch>
        );
    }

  return (
      <AuthContext.Provider
          value={{ isLoggedIn: isLoggedIn, login: login, logout: logout }}
      >
    <div>
      <NavBar />
        {routes}

    </div>
      </AuthContext.Provider>     );
}