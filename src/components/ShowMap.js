import React, { Component } from "react";
import { Map, TileLayer, Popup } from "react-leaflet";
import { renderToStaticMarkup } from "react-dom/server";
import { divIcon } from "leaflet";
import IconBlue from "./IconBlue";
import IconRed from "./IconRed";

import DefaultMarker from "./defaultMarker/DefaultMarker";

class ShowMap extends Component {
  state = {
    center: [50.729203, 7.099475]
  };

  // event handler to center the map on a newly opened popup
  handleCenterOnPopup(latLng) {
    console.log(`Moving center to: ${latLng}`);
    this.setState({
      center: latLng
    });
  }

  render() {
    const defaultIconMarkup = renderToStaticMarkup(<IconBlue />);
    const defaultMarkerIcon = divIcon({ html: defaultIconMarkup });
    const activeIconMarkup = renderToStaticMarkup(<IconRed />);
    const activeMarkerIcon = divIcon({ html: activeIconMarkup });
    // console.log(this.state.steine);

    return (
      <div id="mapid" role="application">
        <Map
          center={this.state.center}
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
          {/* mapping through all locations to create markers and popups */}
          {this.props.steine.map(stein => {
            const position = [stein.lat, stein.lon];
            let imageText;
            if (stein.tags.image) {
              imageText = "Click here for a photo of the marker ";
            }
            // checking if an item is selected to determine what icon and z-index needs to be used
            const isActive = stein.id === this.props.activeStein;

            return (
              <DefaultMarker
                position={position}
                key={stein.id}
                id={stein.id}
                icon={isActive ? activeMarkerIcon : defaultMarkerIcon}
                active={isActive}
                currentMarkerClickHandler={this.props.currentMarkerClickHandler}
                zIndexOffset={isActive ? 200 : 100}
                click={() => this.props.currentMarkerClickHandler(stein.id)}
                alt={"Location of a Stolperstein"}
              >
                {/* added onOpen event to make the map centered on the location of each new Popup */}
                <Popup onOpen={() => this.handleCenterOnPopup(position)}>
                  <div tabindex="0">
                    <p className="mb-0">
                      <span style={{ fontWeight: "bold" }}>
                        {stein.tags.name}
                      </span>
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
                  </div>
                </Popup>
              </DefaultMarker>
            );
          })}
        </Map>
      </div>
    );
  }
}

export default ShowMap;
