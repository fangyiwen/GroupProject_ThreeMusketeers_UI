import React, { useState, useEffect } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import * as siteData from "../data/world-heritage-unesco-list_reduced.json";

import "./Map3.css" 

export default function App() {
    const [viewport, setViewport] = useState({
        latitude: 46.8182,
        longitude: 8.2275,
        width: "100vw",
        height: "100vh",
        zoom: 1.8
    });

    const [selectedSite, setSelectedSite] = useState(null);

    useEffect(() => {
        const listener = e => {
            if (e.key === "Escape") {
                setSelectedSite(null);
            }
        };
        window.addEventListener("keydown", listener);

        return () => {
            window.removeEventListener("keydown", listener);
        };
    }, []);

    return (
        <div>
            <ReactMapGL
                className="map"
                {...viewport}
                mapboxApiAccessToken={`${process.env.REACT_APP_MAPBOX_TOKEN}`}
                mapStyle="mapbox://styles/tctcld/ckdgizl7b09fv1lrm54j308z1"
                onViewportChange={viewport => {
                    setViewport(viewport);
                }}
            >
                {siteData.features.map(site => (
                    <Marker
                        key={site.recordid}
                        latitude={site.geometry.coordinates[1]}
                        longitude={site.geometry.coordinates[0]}
                    >
                        <button
                            className="marker-btn"
                            onClick={e => {
                                e.preventDefault();
                                setSelectedSite(site);
                            }}
                        >
                            <img src={require('./mapmarker.svg')} alt="marker icon" />
                        </button>
                    </Marker>
                ))}

                {selectedSite ? (
                    <Popup className="infobox"
                        latitude={selectedSite.geometry.coordinates[1]}
                        longitude={selectedSite.geometry.coordinates[0]}
                        onClose={() => {
                            setSelectedSite(null);
                        }}
                    >
                        <div>
                            <h5>{selectedSite.fields.name_en}</h5>
                            <p>{selectedSite.fields.short_description_en}</p>
                        </div>
                    </Popup>
                ) : null}
            </ReactMapGL>
        </div>
    );
}
