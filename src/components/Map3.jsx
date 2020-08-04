import React, { useState, useEffect } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import * as siteData from "../data/world-heritage-unesco-list.json";

export default function App() {
    const [viewport, setViewport] = useState({
        latitude: 32.4279,
        longitude: 53.6880,
        width: "100vw",
        height: "100vh",
        zoom: 2
    });

    const [selectedPark, setSelectedPark] = useState(null);

    useEffect(() => {
        const listener = e => {
            if (e.key === "Escape") {
                setSelectedPark(null);
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
                {...viewport}
                mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
                mapStyle="mapbox://styles/tctcld/ckdgizl7b09fv1lrm54j308z1"
                onViewportChange={viewport => {
                    setViewport(viewport);
                }}
            >
                {siteData.features.map(park => (
                    <Marker
                        key={park.recordid}
                        latitude={park.geometry.coordinates[1]}
                        longitude={park.geometry.coordinates[0]}
                    >
                        <button
                            className="marker-btn"
                            onClick={e => {
                                e.preventDefault();
                                setSelectedPark(park);
                            }}
                        >
                            <img src="/skateboarding.svg" alt="Skate Park Icon" />
                        </button>
                    </Marker>
                ))}

                {selectedPark ? (
                    <Popup className="infobox"
                        latitude={selectedPark.geometry.coordinates[1]}
                        longitude={selectedPark.geometry.coordinates[0]}
                        onClose={() => {
                            setSelectedPark(null);
                        }}
                    >
                        <div>
                            <h6>{selectedPark.fields.name_en}</h6>
                            <p>{selectedPark.fields.short_description_en}</p>
                        </div>
                    </Popup>
                ) : null}
            </ReactMapGL>
        </div>
    );
}
