import React from "react";
import { Link } from "react-router-dom";

class SiteCard extends React.Component {

  render() {
    const { site } = this.props;

    return (
        <div className="site-card-container">
          <div className="site-card-image-container">
            <img
                className="site-card-image"
                src={site.world_heritage_list.image_url}
                alt={site.world_heritage_list.states}
            />
          </div>

          <div className="site-card-details-container">
            <div className="site-card-text-details-container">
              <div className="site-card-country-container">
              </div>
              <Link to={`/list/sites/${site.pid}`}>
                <div className="site-card-name-container">
                  {site.world_heritage_list.site.length > 38
                      ? `${site.world_heritage_list.site.substr(0, 32)}...`
                      : site.world_heritage_list.site}
                </div>
              </Link>
              <p>
                {site.world_heritage_list.states.length > 38
                    ? `${site.world_heritage_list.states.substr(0, 32)}...`
                    : site.world_heritage_list.states}
              </p>
            </div>
          </div>
        </div>
    );
  }
}

export default SiteCard;
