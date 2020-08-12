import React from 'react';
import { Icon } from 'semantic-ui-react';
import { Link, withRouter } from 'react-router-dom';
import SitesContainer from './SitesContainer';

import Api from '../../Api';

class HomeContainer extends React.Component {
  state = {
    loading: true,

    africa: [],
    arabStates: [],
    asiaPacific: [],
    europeNorthAmerica: [],
    latinAmericaCaribbean: [],
  };

  componentDidMount() {
    this.init();
    this.props.africa
      && this.setState({
        loading: false,
      });
    window.scrollTo(0, 0);
  }

  //   init the data
  init() {
    this.getdatalist('Africa', 'africa');
    this.getdatalist('Arab States', 'arabStates');
    this.getdatalist('Asia and the Pacific', 'asiaPacific');
    this.getdatalist('Europe and North America', 'europeNorthAmerica');
    this.getdatalist(
      'Latin America and the Caribbean',
      'latinAmericaCaribbean',
    );
  }

  async getdatalist(query, dataListName) {
    const data = await Api.getListData();
    const newList = data.places.filter(
      (item) => item.world_heritage_list.region === query,
    );
    this.setState({
      [dataListName]: newList,
    });
  }

  render() {
    const {
      bucketlist,
      visited,
      europe_and_north_america,
      latin_america_and_the_caribbean,
      asia_and_the_pacific,
      arab_states,
      addBucketlistSiteToState,
      addVisitedSiteToState,
      removeBucketlistSiteFromState,
      removeVisitedSiteFromState,
      signin,
    } = this.props;

    const {
      loading,
      africa,
      arabStates,
      asiaPacific,
      europeNorthAmerica,
      latinAmericaCaribbean,
    } = this.state;

    return (
      <div className="page-content-container">
        <div>
          <div className="home-header-image-container">
            <div className="home-header-content-container-flex">
              <div className="welcome-to">WELCOME TO EXPLORE</div>
              <div className="unesgo-large">UNESCO</div>
            </div>
          </div>

          <div className="sample-sites-container">
            <div className="region-sites-container">
              <div className="primary-header-container">Explore Africa</div>
              <div className="sub-header-container">
                Wildlife, medinas, and ancient wonders...
              </div>
              <SitesContainer
                signin={signin}
                sites={africa}
                visited={visited}
                bucketlist={bucketlist}
                addBucketlistSiteToState={addBucketlistSiteToState}
                addVisitedSiteToState={addVisitedSiteToState}
                removeBucketlistSiteFromState={removeBucketlistSiteFromState}
                removeVisitedSiteFromState={removeVisitedSiteFromState}
              />
              <div className="site-description-link-container">
                <div className="site-description-link-container-text">
                  <Link to={'/list/search/Africa'}>
                    See more from Africa
                    <Icon name="chevron right" size="small" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="region-sites-container">
              <div className="primary-header-container">
                Explore Arab States
              </div>
              <div className="sub-header-container">
                Rich in history and beauty...
              </div>
              <SitesContainer
                signin={signin}
                sites={arabStates}
                visited={visited}
                bucketlist={bucketlist}
                addBucketlistSiteToState={addBucketlistSiteToState}
                addVisitedSiteToState={addVisitedSiteToState}
                removeBucketlistSiteFromState={removeBucketlistSiteFromState}
                removeVisitedSiteFromState={removeVisitedSiteFromState}
              />
              <div className="site-description-link-container">
                <div className="site-description-link-container-text">
                  <Link to={'/list/search/Arab+States'}>
                    See more from Arab States
                    <Icon name="chevron right" size="small" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="region-sites-container">
              <div className="primary-header-container">
                Explore Asia and the Pacific
              </div>
              <div className="sub-header-container">
                Rugged landscapes and fascinating history...
              </div>
              <SitesContainer
                signin={signin}
                sites={asiaPacific}
                visited={visited}
                bucketlist={bucketlist}
                addBucketlistSiteToState={addBucketlistSiteToState}
                addVisitedSiteToState={addVisitedSiteToState}
                removeBucketlistSiteFromState={removeBucketlistSiteFromState}
                removeVisitedSiteFromState={removeVisitedSiteFromState}
              />
              <div className="site-description-link-container">
                <div className="site-description-link-container-text">
                  <Link to={'/list/search/Asia+and+the+Pacific'}>
                    See more from Asia and the Pacific
                    <Icon name="chevron right" size="small" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="region-sites-container">
              <div className="primary-header-container">
                Explore Europe and North America
              </div>
              <div className="sub-header-container">
                Historic architecture and stunning landscapes...
              </div>
              <SitesContainer
                signin={signin}
                sites={europeNorthAmerica}
                visited={visited}
                bucketlist={bucketlist}
                addBucketlistSiteToState={addBucketlistSiteToState}
                addVisitedSiteToState={addVisitedSiteToState}
                removeBucketlistSiteFromState={removeBucketlistSiteFromState}
                removeVisitedSiteFromState={removeVisitedSiteFromState}
              />
              <div className="site-description-link-container">
                <div className="site-description-link-container-text">
                  <Link to={'/list/search/Europe+and+North+America'}>
                    See more from Europe and North America
                    <Icon name="chevron right" size="small" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="region-sites-container">
              <div className="primary-header-container">
                Explore Latin America and the Caribbean
              </div>
              <div className="sub-header-container">
                Biodiversity found no where else...
              </div>
              <SitesContainer
                signin={signin}
                sites={latinAmericaCaribbean}
                visited={visited}
                bucketlist={bucketlist}
                addBucketlistSiteToState={addBucketlistSiteToState}
                addVisitedSiteToState={addVisitedSiteToState}
                removeBucketlistSiteFromState={removeBucketlistSiteFromState}
                removeVisitedSiteFromState={removeVisitedSiteFromState}
              />
              <div className="site-description-link-container">
                <div className="site-description-link-container-text">
                  <Link to={'/list/search/Latin+America+and+the+Caribbean'}>
                    See more from Latin America and the Caribbean
                    <Icon name="chevron right" size="small" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(HomeContainer);
