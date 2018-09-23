import React, { Component } from "react";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";

class ShowMap extends Component {
  state = {
    steine: []
  };

  // async componentDidMount() {
  //   try {
  //     const response = await fetch(
  //       "http://overpass-api.de/api/interpreter?data=[out:json]%2F*%0AThis%20has%20been%20generated%20by%20the%20overpass-turbo%20wizard.%0AThe%20original%20search%20was%3A%0A%E2%80%9C%22memorial%3Atype%22%3Dstolperstein%20and%20type%3Anode%20in%20%22Bonn%22%20%E2%80%9D%0A*%2F%0A%5Bout%3Ajson%5D%5Btimeout%3A25%5D%3B%0A%2F%2F%20fetch%20area%20%E2%80%9CBonn%E2%80%9D%20to%20search%20in%0Aarea%283600062508%29-%3E.searchArea%3B%0A%2F%2F%20gather%20results%0A%28%0A%20%20%2F%2F%20query%20part%20for%3A%20%E2%80%9C%22memorial%3Atype%22%3Dstolperstein%E2%80%9D%0A%20%20node%5B%22memorial%3Atype%22%3D%22stolperstein%22%5D%28area.searchArea%29%3B%0A%29%3B%0A%2F%2F%20print%20results%0Aout%20body%3B%0A%3E%3B%0Aout%20skel%20qt%3B"
  //     );
  //     const json = await response.json();
  //     console.log({ data: json });
  //   } catch (error) {
  //     console.log("Oops. Something went wrong.", error);
  //   }
  // }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    fetch(
      "http://overpass-api.de/api/interpreter?data=[out:json]%2F*%0AThis%20has%20been%20generated%20by%20the%20overpass-turbo%20wizard.%0AThe%20original%20search%20was%3A%0A%E2%80%9C%22memorial%3Atype%22%3Dstolperstein%20and%20type%3Anode%20in%20%22Bonn%22%20%E2%80%9D%0A*%2F%0A%5Bout%3Ajson%5D%5Btimeout%3A25%5D%3B%0A%2F%2F%20fetch%20area%20%E2%80%9CBonn%E2%80%9D%20to%20search%20in%0Aarea%283600062508%29-%3E.searchArea%3B%0A%2F%2F%20gather%20results%0A%28%0A%20%20%2F%2F%20query%20part%20for%3A%20%E2%80%9C%22memorial%3Atype%22%3Dstolperstein%E2%80%9D%0A%20%20node%5B%22memorial%3Atype%22%3D%22stolperstein%22%5D%28area.searchArea%29%3B%0A%29%3B%0A%2F%2F%20print%20results%0Aout%20body%3B%0A%3E%3B%0Aout%20skel%20qt%3B"
    )
      .then(res => res.json())
      .then(steine => {
        this.setState({ steine: steine.elements });
      })
      .catch(err => console.log("There was a problem loading data", err));
  }

  render() {
    let position = [""];
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
            position: "absolute"
          }}
        >
          <TileLayer
            attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {this.state.steine.map(stein => {
            position = [stein.lat, stein.lon];
            return (
              <Marker position={position} key={stein.id}>
                <Popup>
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
                  <a
                    href={`https://de.wikipedia.org/wiki/Liste_der_Stolpersteine_in_Bonn#/media/${
                      stein.tags.image
                    }`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Click here to see an image of the marker
                  </a>
                </Popup>
              </Marker>
            );
          })}
          })}
        </Map>
      </div>
    );
  }
}

export default ShowMap;
