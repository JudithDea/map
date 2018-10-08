import React from "react";
import { Marker, Popup } from "react-leaflet";
import { renderToStaticMarkup } from "react-dom/server";
import { divIcon } from "leaflet";
import IconRed from "./IconRed";
import IconBlue from "./IconBlue";

import "./DefaultMarker.css";

const DefaultMarker = props => {
  const iconMarkup = renderToStaticMarkup(<IconBlue />);
  const defaultMarkerIcon = divIcon({
    html: iconMarkup
  });

  let imageText;
  let position = [""];

  return props.steine.map(stein => {
    position = [stein.lat, stein.lon];

    /// IF a marker is currently selected, in this iteration the current ID is set equal to the selected marker's ID
    const currentMarkerSelected = stein.id === props.CurrentMarker;
    // console.log(props.CurrentMarker);

    return (
      <Marker
        position={position}
        key={stein.id}
        icon={defaultMarkerIcon}
        current={currentMarkerSelected}
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
