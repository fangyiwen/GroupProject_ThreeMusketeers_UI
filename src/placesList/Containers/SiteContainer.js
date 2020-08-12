import React from "react";
import API from "./../../Api";
import { Icon } from "semantic-ui-react";
import TagsContainer from "./TagsContainer";
import MapContainer from "./MapContainer";
import LoadingContainer from "./LoadingContainer";
import Auth from "../../user/pages/Auth";
import { sites } from "./../../shared/components/data/whl.json";
import { withRouter } from "react-router-dom";

class SiteContainer extends React.Component {
  state = {
    site: {
      world_heritage_list: {},
    },
    bucketlist: [],
    visited: [],
    loading: true,
  };

  componentDidMount() {
    this.getdataList();
  }

  async getdataList() {
    var id = this.props.match.params.id;
    var newList = await API.getListDataById(id);

    this.setState({
      site: newList.place,
      loading: false,
    });
  }

  handleAddToBucketlist = (site) => {
    API.addToBucketlist(site.id).then(this.props.addBucketlistSiteToState);
    this.setState({
      bucketlist: true,
    });
  };

  handleRemoveFromBucketlist = (site_id) => {
    API.removeFromBucketlist(site_id).then(
      this.props.removeBucketlistSiteFromState
    );
    this.setState({
      bucketlist: false,
    });
  };

  handleAddToVisited = (site) => {
    API.addToVisited(site.id).then(this.props.addVisitedSiteToState);
    !this.bucketlist &&
      this.setState({
        visited: true,
      });
  };

  handleRemoveFromVisited = (site_id) => {
    API.removeFromVisited(site_id).then(this.props.removeVisitedSiteFromState);
    this.setState({
      visited: false,
    });
  };

  addToBucketlistButton = () => {
    const modalTrigger = () => {
      return <button className="active-button">Save to bucketlist</button>;
    };

    if (!localStorage.getItem("token")) {
      return (
        <Auth
          signin={this.props.signin}
          modalTrigger={modalTrigger}
          status={"login"}
        />
      );
    } else {
      return (
        <button
          className="active-button"
          onClick={() => this.handleAddToBucketlist(this.state.site)}
        >
          Save to bucketlist
        </button>
      );
    }
  };

  removeFromBucketlistButton = () => {
    return (
      <button
        className="passive-button"
        onClick={() => this.handleRemoveFromBucketlist(this.state.site.id)}
      >
        Remove from bucketlist
      </button>
    );
  };

  addToVisitedButton = () => {
    const modalTrigger = () => {
      return <button className="active-button">Save to visited</button>;
    };

    if (!localStorage.getItem("token")) {
      return (
        <Auth
          signin={this.props.signin}
          modalTrigger={modalTrigger}
          status={"login"}
        />
      );
    } else {
      return (
        <button
          className="active-button"
          onClick={() => this.handleAddToVisited(this.state.site)}
        >
          Save to visited
        </button>
      );
    }
  };

  removeFromVisitedButton = () => {
    return (
      <button
        className="passive-button"
        onClick={() => this.handleRemoveFromVisited(this.state.site.id)}
      >
        Remove from visited
      </button>
    );
  };

  buttons = () => {
    const { bucketlist, visited } = this.state;
    if (visited) {
      return (
        <div className="save-buttons-container-site-show-page">
          {this.removeFromVisitedButton()}
        </div>
      );
    } else if (bucketlist) {
      return (
        <div className="save-buttons-container-site-show-page">
          {this.addToVisitedButton()}
          {this.removeFromBucketlistButton()}
        </div>
      );
    } else {
      return (
        <div className="save-buttons-container-site-show-page">
          {this.addToVisitedButton()}
          {this.addToBucketlistButton()}
        </div>
      );
    }
  };

  renderMapContainer = () => {
    if (this.state.site.world_heritage_list.longitude) {
      const latitudeAsFloat = parseFloat(
        this.state.site.world_heritage_list.latitude,
        10
      );
      const longitudeAsFloat = parseFloat(
        this.state.site.world_heritage_list.longitude,
        10
      );
      const center = { lat: latitudeAsFloat, lng: longitudeAsFloat };

      return (
        <MapContainer
          center={center}
          lat={latitudeAsFloat}
          lng={longitudeAsFloat}
          name={this.state.site.name}
        />
      );
    }
  };

  render() {
    const { site } = this.state;
    console.log("site -> :", site);
    let states = site.world_heritage_list.states
      ? site.world_heritage_list.states.split(",")
      : [];
    let statesStr = states.map((code) => code.toUpperCase()).join(",");

    let iso_codes = site.world_heritage_list.iso_code
      ? site.world_heritage_list.iso_code.split(",")
      : [];
    let iso_codesStr = iso_codes.map((code) => code.toUpperCase()).join(",");

    return (
      <div className="page-content-container">
        <React.Fragment>
          <div className="site-headings-container">
            <div className="site-headings-container-flex-1">
              <div className="site-name-heading-container">
                {site.world_heritage_list.site}
              </div>

              <div className="site-sub-headings-container">
                <div className="site-sub-heading-container">{statesStr}</div>
                <div className="site-sub-heading-container">
                  {`|  ${site.world_heritage_list.region}`}
                </div>
              </div>
            </div>
          </div>

          <div className="site-details-container">
            <div className="site-details-column-1-container">
              <div className="site-image-container">
                <img
                  className="site-image"
                  src={site.world_heritage_list.image_url}
                  alt={site.world_heritage_list.site}
                />
              </div>

              {/* <TagsContainer tags={tags} /> */}

              <div className="site-description-container">
                <div className="site-description-container-header">
                  The Site
                </div>
                <div
                  className="site-description-text-container"
                  dangerouslySetInnerHTML={{
                    __html: site.world_heritage_list.short_description,
                  }}
                ></div>
                {this.renderMapContainer()}
              </div>
            </div>

            <div className="site-details-column-2-container">
              <div className="site-sub-details-container">
                <div className="site-detail-description">
                  <Icon name="calendar alternate outline" /> DATE INSCRIBED
                </div>
                <div className="site-detail">
                  {site.world_heritage_list.date_inscribed}
                </div>
              </div>

              <div className="site-sub-details-container">
                <div className="site-detail-description">
                  <Icon name="sitemap" /> CATEGORY
                </div>
                <div className="site-detail">
                  {site.world_heritage_list.category}
                </div>
              </div>

              <div className="site-sub-details-container">
                <div className="site-detail-description">
                  <Icon name="location arrow" />
                  {states && (states.length > 1 ? `COUNTRIES` : `COUNTRY`)}
                </div>
                <div className="site-detail">{statesStr}</div>
              </div>

              <div className="site-sub-details-container">
                <div className="site-detail-description">
                  <Icon name="world" /> REGION
                </div>
                <div className="site-detail">
                  {site.world_heritage_list.region}
                </div>
              </div>

              <div className="site-sub-details-container">
                <div className="site-detail-description">
                  <Icon name="arrows alternate vertical" /> LONGITUDE
                </div>
                <div className="site-detail">
                  {site.world_heritage_list.longitude}
                </div>
              </div>

              <div className="site-sub-details-container">
                <div className="site-detail-description">
                  <Icon name="arrows alternate horizontal" />
                  LATITUDE
                </div>
                <div className="site-detail">
                  {site.world_heritage_list.latitude}
                </div>
              </div>

              <div className="site-sub-details-container">
                <div className="site-detail-description">
                  <Icon name="barcode" />
                  {iso_codes &&
                    (iso_codes.length > 1 ? `COUNTRY CODES` : `COUNTRY CODE`)}
                </div>
                <div className="site-detail">{iso_codesStr}</div>
              </div>

              <div className="underline"> </div>

              {/* <div className="site-sub-details-container-buttons">
                {this.buttons()}
              </div> */}

              <div className="underline"></div>

              <div className="unesco-link-container">
                <a
                  className="unesco-link"
                  href={site.world_heritage_list.http_url}
                  target="blank"
                >
                  <Icon name="external alternate" />
                  Learn more
                </a>
              </div>
            </div>
          </div>
        </React.Fragment>
      </div>
    );
  }
}

export default withRouter(SiteContainer);
