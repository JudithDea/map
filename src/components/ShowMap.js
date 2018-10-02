import React from "react";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";

const ShowMap = props => {
  let position = [""];
  // console.log(this.state.steine);
  const mapPosition = [50.729203, 7.099475];
  let imageText;

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
        {props.steine.map(stein => {
          position = [stein.lat, stein.lon];
          if (stein.tags.image) {
            imageText = "Click here for a photo of the marker ";
          }

          return (
            <Marker position={position} key={stein.id}>
              <Popup>
                <p className="mb-0">
                  <span style={{ fontWeight: "bold" }}>{stein.tags.name}</span>
                  <br />
                  Date of birth: {stein.tags["person:date_of_birth"]}
                  <br />
                  Date of death: {stein.tags["person:date_of_death"]}
                </p>
                <p className="mb-0">"{stein.tags["memorial:text"]}" </p>
                <p>
                  <a
                    href={`https://de.wikipedia.org/wiki/Liste_der_Stolpersteine_in_Bonn#/media/${
                      stein.tags.image
                    }`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fas fa-external-link-alt" /> {imageText}
                  </a>
                </p>
              </Popup>
            </Marker>
          );
        })}
      </Map>
    </div>
  );
};

export default ShowMap;
