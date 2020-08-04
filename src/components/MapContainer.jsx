import React from "react";
import { withGoogleMap, withScriptjs } from "react-google-maps";
import Map from "../components/Map"
import Map2 from "../components/Map2";
import Map3 from "../components/Map3";


export default function MapContainer() {
  return (
    <div style={{ width: "100vw", height: "50%" }}>
     <Map3 />
    </div>
  );
}