import React from "react";
import { withRouter } from "react-router-dom";
import API from "./../../Api";
import SitesContainer from "./SitesContainer";
import LoadingContainer from "./LoadingContainer";
import { sites } from "./../../shared/components/data/whl.json";

class SearchResultsContainer extends React.PureComponent {
  state = {
    sites: [],
    searchCriteria: "",
    loading: true,
  };

  getSearchResultsBasedOnURL = () => {
    if (this.props.match.url.split("/").includes("search_by_tag")) {
      let split_url = this.props.match.url.split("/");
      let tag = split_url[split_url.length - 1];
      API.searchByTag(tag).then((data) =>
        this.setState({
          sites: data,
          searchCriteria: tag,
          loading: false,
        })
      );
    } else {
      let url = this.props.match.url;
      API.search(url).then((data) =>
        this.setState({
          sites: data,
          searchCriteria: url.split("=")[1].split("+").join(" "),
          loading: false,
        })
      );
    }
    window.scrollTo(0, 0);
  };

  componentDidMount() {
    this.getdataList();
  }

  async getdataList() {
    //   eliminate +
    var { region } = this.props.match.params;
    var newRegion = region.replace(/\+/g, " ");
    let url = this.props.match.url;
    var data = await API.getListData();
    var newList = data.places.filter(
      (item) => item.world_heritage_list.region === newRegion
    );
    this.setState({
      sites: newList,
      searchCriteria: url.split("/").pop().replace(/\+/g, " "),
      loading: false,
    });
  }

  componentDidUpdate(prevProps) {
    // if (prevProps.match.url !== this.props.match.url) {
    //   this.setState({
    //     loading: true,
    //   });
    //   this.getSearchResultsBasedOnURL();
    // }
  }

  render() {
    const {
      bucketlist,
      visited,
      addBucketlistSiteToState,
      addVisitedSiteToState,
      removeBucketlistSiteFromState,
      removeVisitedSiteFromState,
      signin,
    } = this.props;

    const { sites, searchCriteria, loading } = this.state;

    return (
      <div className="page-content-container">
        {loading ? (
          <LoadingContainer />
        ) : (
          <div>
            <div className="search-results-container-headers">
              <div className="primary-header-container">
                {`Displaying results for '${searchCriteria}'`}
              </div>
            </div>

            <SitesContainer
              signin={signin}
              sites={sites}
              visited={visited}
              bucketlist={bucketlist}
              addBucketlistSiteToState={addBucketlistSiteToState}
              addVisitedSiteToState={addVisitedSiteToState}
              removeBucketlistSiteFromState={removeBucketlistSiteFromState}
              removeVisitedSiteFromState={removeVisitedSiteFromState}
            />
          </div>
        )}
      </div>
    );
  }
}

export default withRouter(SearchResultsContainer);
