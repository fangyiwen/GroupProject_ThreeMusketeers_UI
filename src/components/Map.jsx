import React, { useState, useEffect } from "react";
import { GoogleMap, Marker, InfoWindow } from "react-google-maps";
import * as siteData from "../data/unesco-sites.json";
import mapStyles from "../mapStyles";

export default function Map() {
    const [selectedPark, setSelectedPark] = useState(null);

    // useEffect(() => {
    //     const listener = e => {
    //       if (e.key === "Escape") {
    //         setSelectedPark(null);
    //       }
    //     };
    //     window.addEventListener("keydown", listener);
    
    //     return () => {
    //       window.removeEventListener("keydown", listener);
    //     };
    //   }, []);
    
    return (
        <GoogleMap
            defaultZoom={3}
            defaultCenter={{ lat: 32.4279, lng: 53.6880 }} // location upon loading
            defaultOptions={{ styles: mapStyles }}
        >   
            {/* add markers from database */}
            {siteData.features.map(park => (
                <Marker
                    key={park.properties.PARK_ID}
                    position={{
                        lat: park.geometry.coordinates[0],
                        lng: park.geometry.coordinates[1]
                    }}
                    onClick={() => {
                        setSelectedPark(park);
                    }}
                    icon={{
                        url: `/skateboarding.svg`,
                        scaledSize: new window.google.maps.Size(25, 25)
                    }}
                />
            ))}
                    
            {/* add info window for marker */}
            {selectedPark && (
                <InfoWindow
                    onCloseClick={() => {
                        setSelectedPark(null);
                    }}
                    position={{
                        lat: selectedPark.geometry.coordinates[0],
                        lng: selectedPark.geometry.coordinates[1]
                    }}
                >
                    <div>
                        <h4>{selectedPark.properties.NAME}</h4>
                        <p>{selectedPark.properties.DESCRIPTION}</p>
                    </div>
                </InfoWindow>
            )}
        </GoogleMap>
    );
}
