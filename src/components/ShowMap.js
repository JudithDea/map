import React, { Component } from "react";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";

class ShowMap extends Component {
  state = {
    lat: 50.733378,
    lng: 7.096775,
    zoom: 14
  };

  render() {
    const position = [this.state.lat, this.state.lng];
    return (
      <div role="application">
        <Map
          center={position}
          zoom={this.state.zoom}
          style={{ height: "700px" }}
        >
          <TileLayer
            attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </Map>
      </div>
    );
  }
}

export default ShowMap;
