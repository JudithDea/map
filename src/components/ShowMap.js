import React from "react";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";

import DefaultMarker from "./defaultMarker/DefaultMarker";

const ShowMap = props => {
  // let position = [""];
  // console.log(this.state.steine);
  const mapPosition = [50.729203, 7.099475];

  return (
    <div id="mapid" role="application">
      <Map
        center={mapPosition}
        zoom={14}
        style={{
          //Styling for window-sized map
          top: "0",
          bottom: "0",
          left: "0",
          right: "0",
          position: "fixed"
        }}
      >
        <TileLayer
          attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <DefaultMarker
          steine={props.steine}
          defaultSteine={props.defaultSteine}
          activeStein={props.activeStein}
        />
        {/* <CurrentMarker activeStein={props.activeStein} steine={props.steine} /> */}
      </Map>
    </div>
  );
};

export default ShowMap;
