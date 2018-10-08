import React from "react";
import { Marker, Popup } from "react-leaflet";
import { renderToStaticMarkup } from "react-dom/server";
import { divIcon } from "leaflet";
import IconBlue from "./IconBlue";

import "./DefaultMarker.css";

const DefaultMarker = props => {
  const iconMarkup = renderToStaticMarkup(<IconBlue />);
  const defaultMarkerIcon = divIcon({
    html: iconMarkup
  });

  //   const activeIconMarkup = renderToStaticMarkup(<IconRed />);
  //   const activeMarkerIcon = divIcon({
  //     html: activeIconMarkup
  //   });

  let imageText;
  let position = [""];

  //   const mieze = props.currentMarker[0] && props.currentMarker[0].id;
  //   console.log(props.currentMarker);
  //   const feathers = props.steine.find(stein => stein.id === mieze);
  //   console.log(feathers);

  return props.steine.map(stein => {
    position = [stein.lat, stein.lon];

    return (
      <Marker position={position} key={stein.id} icon={defaultMarkerIcon}>
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
