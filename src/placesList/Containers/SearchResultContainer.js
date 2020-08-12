import React from 'react';
import { withRouter } from 'react-router-dom';
import API from '../../Api';
import SitesContainer from './SitesContainer';
import LoadingContainer from './LoadingContainer';

class SearchResultsContainer extends React.PureComponent {
  state = {
    sites: [],
    searchCriteria: '',
    loading: true,
  };

  componentDidMount() {
    this.getdataList();
  }

  async getdataList() {
    //   eliminate +
    const { region } = this.props.match.params;
    const newRegion = region.replace(/\+/g, ' ');
    const { url } = this.props.match;
    const data = await API.getListData();
    const newList = data.places.filter(
      (item) => item.world_heritage_list.region === newRegion,
    );
    this.setState({
      sites: newList,
      searchCriteria: url.split('/').pop().replace(/\+/g, ' '),
      loading: false,
    });
  }

  render() {
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
              sites={sites}
            />
          </div>
        )}
      </div>
    );
  }
}

export default withRouter(SearchResultsContainer);
