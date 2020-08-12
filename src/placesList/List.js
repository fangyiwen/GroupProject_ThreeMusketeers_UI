import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import "./List.css";

import API from "./../Api";
import SiteContainer from "./Containers/SiteContainer";
import HomeContainer from "./Containers/HomeContainer";
import SearchResultsContainer from "./Containers/SearchResultContainer";
import SavedContainer from "./Containers/SavedContainer";

class List extends React.Component {
  state = {
    user_id: "",
    first_name: "",
    bucketlist: [],
    visited: [],
    europe_and_north_america: [],
    latin_america_and_the_caribbean: [],
    africa: [],
    asia_and_the_pacific: [],
    arab_states: [],
  };

  componentDidMount() {
    const token = localStorage.getItem("token");
    if (token) {
      API.validate()
        .then((data) => {
          if (data.error) throw Error(data.error);
          this.signin(data);
        })
        .catch((error) => console.log(error));
    }
  }

  signin = (user) => {
    this.setState(
      {
        user_id: user.id,
        first_name: user.first_name,
      },
      () => this.getBucketlistAndVisited(user.id)
    );
    localStorage.setItem("token", user.token);
  };

  getBucketlistAndVisited = async (user_id) => {
    const bucketlist = await API.getBucketlist(user_id);
    const visited = await API.getVisited(user_id);
    this.setState({
      bucketlist,
      visited,
    });
  };

  getTheseSites = (siteIds) => Promise.all(siteIds.map(API.getSite));

  addBucketlistSiteToState = (site) => {
    this.setState({
      ...this.state,
      bucketlist: [...this.state.bucketlist, site],
    });
  };

  removeBucketlistSiteFromState = (site_id) => {
    let filteredBucketlist = this.state.bucketlist.filter(
      (site) => site.id !== site_id
    );
    this.setState({
      ...this.state,
      bucketlist: filteredBucketlist,
    });
  };

  addVisitedSiteToState = (site) => {
    let filteredBucketlist = this.state.bucketlist.filter(
      (s) => s.id !== site.id
    );
    this.setState({
      ...this.state,
      bucketlist: filteredBucketlist,
      visited: [...this.state.visited, site],
    });
  };

  removeVisitedSiteFromState = (site_id) => {
    let filteredVisited = this.state.visited.filter(
      (site) => site.id !== site_id
    );
    this.setState({
      ...this.state,
      visited: filteredVisited,
    });
  };

  signout = () => {
    this.setState({
      user_id: "",
      first_name: "",
      bucketlist: [],
      visited: [],
    });
    localStorage.removeItem("token");
  };

  render() {
    const {
      signin,
      signout,
      addBucketlistSiteToState,
      addVisitedSiteToState,
      removeBucketlistSiteFromState,
      removeVisitedSiteFromState,
    } = this;

    const {
      user_id,
      first_name,
      bucketlist,
      visited,
      europe_and_north_america,
      latin_america_and_the_caribbean,
      africa,
      asia_and_the_pacific,
      arab_states,
    } = this.state;

    return (
      <Router>
        <div className="List">
          <Switch>
            <Route
              exact
              path="/list"
              render={(routerProps) => (
                <HomeContainer
                  {...routerProps}
                  user_id={user_id}
                  first_name={first_name}
                  signin={signin}
                  signout={signout}
                  europe_and_north_america={europe_and_north_america}
                  latin_america_and_the_caribbean={
                    latin_america_and_the_caribbean
                  }
                  asia_and_the_pacific={asia_and_the_pacific}
                  arab_states={arab_states}
                  bucketlist={bucketlist}
                  visited={visited}
                  addBucketlistSiteToState={addBucketlistSiteToState}
                  addVisitedSiteToState={addVisitedSiteToState}
                  removeBucketlistSiteFromState={removeBucketlistSiteFromState}
                  removeVisitedSiteFromState={removeVisitedSiteFromState}
                />
              )}
            />
            {/* region */}
            <Route
              path="/list/search/:region"
              exact
              render={(routerProps) => (
                <SearchResultsContainer
                  {...routerProps}
                  user_id={user_id}
                  first_name={first_name}
                  signin={signin}
                  signout={signout}
                  visited={visited}
                  bucketlist={bucketlist}
                  addBucketlistSiteToState={addBucketlistSiteToState}
                  addVisitedSiteToState={addVisitedSiteToState}
                  removeBucketlistSiteFromState={removeBucketlistSiteFromState}
                  removeVisitedSiteFromState={removeVisitedSiteFromState}
                />
              )}
            />
            <Route
              path="/list/search_by_tag/:tag"
              render={(routerProps) => (
                <SearchResultsContainer
                  {...routerProps}
                  user_id={user_id}
                  first_name={first_name}
                  signin={signin}
                  signout={signout}
                  visited={visited}
                  bucketlist={bucketlist}
                  addBucketlistSiteToState={addBucketlistSiteToState}
                  addVisitedSiteToState={addVisitedSiteToState}
                  removeBucketlistSiteFromState={removeBucketlistSiteFromState}
                  removeVisitedSiteFromState={removeVisitedSiteFromState}
                />
              )}
            />
            {/* looking up the detail */}
            <Route
              path="/list/sites/:id"
              exact
              render={(routerProps) => (
                <SiteContainer
                  {...routerProps}
                  bucketlist={bucketlist}
                  visited={visited}
                  user_id={user_id}
                  first_name={first_name}
                  signin={signin}
                  signout={signout}
                  addBucketlistSiteToState={addBucketlistSiteToState}
                  addVisitedSiteToState={addVisitedSiteToState}
                  removeBucketlistSiteFromState={removeBucketlistSiteFromState}
                  removeVisitedSiteFromState={removeVisitedSiteFromState}
                />
              )}
            />

            <Route
              path="/list/users/:id/saved"
              component={(routerProps) => (
                <SavedContainer
                  {...routerProps}
                  user_id={this.state.user_id}
                  bucketlist={bucketlist}
                  visited={visited}
                  addBucketlistSiteToState={addBucketlistSiteToState}
                  addVisitedSiteToState={addVisitedSiteToState}
                  removeBucketlistSiteFromState={removeBucketlistSiteFromState}
                  removeVisitedSiteFromState={removeVisitedSiteFromState}
                />
              )}
            />
            <Route
              component={() => <div className="not-found">Page Not Found</div>}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default List;
