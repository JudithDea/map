import React from "react";
import { Map, TileLayer, Popup } from "react-leaflet";
import { renderToStaticMarkup } from "react-dom/server";
import { divIcon } from "leaflet";
import IconBlue from "./IconBlue";
import IconRed from "./IconRed";

import DefaultMarker from "./defaultMarker/DefaultMarker";

const ShowMap = props => {
  const defaultIconMarkup = renderToStaticMarkup(<IconBlue />);
  const defaultMarkerIcon = divIcon({ html: defaultIconMarkup });
  const activeIconMarkup = renderToStaticMarkup(<IconRed />);
  const activeMarkerIcon = divIcon({ html: activeIconMarkup });
  // let position = [""];
  // console.log(this.state.steine);
  const mapPosition = [50.716445, 7.131602];

  return (
    <div id="mapid" role="application">
      <Map
        center={mapPosition}
        zoom={12.5}
        zIndexOffset={100}
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
          const position = [stein.lat, stein.lon];
          let imageText;
          if (stein.tags.image) {
            imageText = "Click here for a photo of the marker ";
          }
          const isActive = stein.id === props.activeStein;

          return (
            <DefaultMarker
              position={position}
              key={stein.id}
              id={stein.id}
              icon={isActive ? activeMarkerIcon : defaultMarkerIcon}
              active={isActive}
              currentMarkerClickHandler={props.currentMarkerClickHandler}
              zIndexOffset={isActive ? 200 : 100}
              click={() => props.currentMarkerClickHandler(stein.id)}
            >
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
            </DefaultMarker>
          );
        })}
      </Map>
    </div>
  );
};

export default ShowMap;
