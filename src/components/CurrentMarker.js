import React from "react";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";

const CurrentMarker = props => {
  let imageText;

  let activeMarkerPosition = [
    props.currentMarker[0] && props.currentMarker[0].lat,
    props.currentMarker[0] && props.currentMarker[0].lon
  ];

  console.log(activeMarkerPosition);

  let activeMarker;
  if (props.currentMarker) {
    activeMarker = (
      <Marker position={activeMarkerPosition}>
        <Popup>
          <p className="mb-0">
            <span style={{ fontWeight: "bold" }}>
              {props.currentMarker[0] &&
                props.currentMarker[0].tags &&
                props.currentMarker[0].tags.name}
            </span>
            <br />
            Date of birth:{" "}
            {props.currentMarker[0] &&
              props.currentMarker[0].tags &&
              props.currentMarker[0].tags["person:date_of_birth"]}
            <br />
            Date of death:{" "}
            {props.currentMarker[0] &&
              props.currentMarker[0].tags &&
              props.currentMarker[0].tags["person:date_of_death"]}
          </p>
          <p className="mb-0">
            "
            {props.currentMarker[0] &&
              props.currentMarker[0].tags &&
              props.currentMarker[0].tags["memorial:text"]}
            "{" "}
          </p>
          <p>
            <a
              href={`https://de.wikipedia.org/wiki/Liste_der_Stolpersteine_in_Bonn#/media/${props
                .currentMarker[0] &&
                props.currentMarker[0].tags &&
                props.currentMarker[0].tags.image}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fas fa-external-link-alt" /> {imageText}
            </a>
          </p>
        </Popup>
      </Marker>
    );
  }

  return <div>{activeMarker}</div>;
};

export default CurrentMarker;
