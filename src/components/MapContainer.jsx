import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react'

export class MapContainer extends Component {
  render() {
    return (
      <div className="map-container">
        <Map google={this.props.google} zoom={14}>

          <Marker onClick={this.onMarkerClick}
            name={'Current location'} />



        </Map>
      </div>

    );
  }
}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyDA3YrmtaWD5_DcNhXUZGM5_qoncmZUDCA')
})(MapContainer)