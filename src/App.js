import React, { useState, useCallback } from 'react';
import {
  BrowserRouter as Router, Route, Redirect, Switch,
} from 'react-router-dom';

import Home from './shared/components/UIElements/Home';
import Search from './shared/components/UIElements/Search';

import Users from './user/pages/Users';
import NewPlace from './places/pages/NewPlace';
import UserPlaces from './places/pages/UserPlaces';
import UpdatePlace from './places/pages/UpdatePlace';
import Auth from './user/pages/Auth';
import MainNavigation from './shared/components/Navigation/MainNavigation';
import { AuthContext } from './shared/context/auth-context';
import HomeContainer from './placesList/Containers/HomeContainer';
import SearchResultsContainer from './placesList/Containers/SearchResultContainer';
import './App.css';
import SiteContainer from './placesList/Containers/SiteContainer';

const App = () => {
  const [token, setToken] = useState(false);
  const [userId, setUserId] = useState(false);

  const login = useCallback((uid, token) => {
    setToken(token);
    setUserId(uid);
  }, []);

  const logout = useCallback(() => {
    setToken(null);
    setUserId(null);
  }, []);

  let routes;

  if (token) {
    routes = (
      <Switch>
        <Route path="/home" exact>
          <Home />
        </Route>
        <Route path="/search" exact>
          <Search />
        </Route>
          <Route path="/list" exact>
              <HomeContainer />
          </Route>
          <Route path="/list/search/:region" exact>
              <SearchResultsContainer/>
          </Route>
          <Route path="/list/sites/:id" exact>
              <SiteContainer/>
          </Route>
        <Route path="/" exact>
          <Users />
        </Route>
        <Route path="/:userId/places" exact>
          <UserPlaces />
        </Route>
        <Route path="/places/new" exact>
          <NewPlace />
        </Route>
        <Route path="/places/:placeId">
          <UpdatePlace />
        </Route>
        <Redirect to="/" />
      </Switch>
    );
  } else {
    routes = (
      <Switch>
        <Route path="/home" exact>
          <Home />
        </Route>
        <Route path="/search" exact>
          <Search />
        </Route>
          <Route path="/list" exact>
              <HomeContainer />
          </Route>
          <Route path="/list/search/:region" exact>
              <SearchResultsContainer/>
          </Route>
          <Route path="/list/sites/:id" exact>
              <SiteContainer/>
          </Route>
          <Route path="/" exact>
          <Users />
        </Route>
        <Route path="/:userId/places" exact>
          <UserPlaces />
        </Route>
        <Route path="/auth">
          <Auth />
        </Route>
        <Redirect to="/auth" />
      </Switch>
    );
  }

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: !!token, token, userId, login, logout,
      }}
    >
      <Router>
        <MainNavigation />
        <main>{routes}</main>
      </Router>
    </AuthContext.Provider>
  );
};

export default App;
