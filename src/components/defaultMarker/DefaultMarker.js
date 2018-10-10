import React from "react";
import { Marker, Popup } from "react-leaflet";
import { renderToStaticMarkup } from "react-dom/server";
import { divIcon } from "leaflet";
import IconBlue from "./IconBlue";
import IconRed from "./IconRed";

import "./DefaultMarker.css";

const DefaultMarker = props => {
  const defaultIconMarkup = renderToStaticMarkup(<IconBlue />);
  const defaultMarkerIcon = divIcon({ html: defaultIconMarkup });
  const activeIconMarkup = renderToStaticMarkup(<IconRed />);
  const activeMarkerIcon = divIcon({ html: activeIconMarkup });

  let imageText;

  return props.steine.map(stein => {
    const position = [stein.lat, stein.lon];
    let imageText;
    if (stein.tags.image) {
      imageText = "Click here for a photo of the marker ";
    }
    const isActive = stein.id === props.activeStein;

    return (
      <Marker
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
      </Marker>
    );
  });
};
export default DefaultMarker;
