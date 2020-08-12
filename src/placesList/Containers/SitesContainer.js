import React from 'react';
import SiteCard from './SiteCard';
import NoResults from './NoResultsContainer';

const SitesContainer = ({
  sites,
}) => (
    <div>
      {sites.length > 0 ? (
        <div className="sites-container">
          {sites.map((site, index) => (
            <SiteCard
              key={index}
              site={site}
            />
          ))}
        </div>
      ) : (
        <NoResults />
      )}
    </div>
);

export default SitesContainer;
