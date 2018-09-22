import React, { Component } from "react";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";

class ShowMap extends Component {
  state = {
    steine: []
  };

  // async componentDidMount() {
  //   try {
  //     const response = await fetch(
  //       "https://overpass-api.de/api/interpreter?data=[out:json][timeout:25][bbox:50.5,6.9,50.88,7.4];(node[%22memorial:type%22=%22stolperstein%22];way[%22memorial:type%22=%22stolperstein%22];rel[%22memorial:type%22=%22stolperstein%22];);out%20meta;%3E;out%20meta%20qt;"
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
      "https://overpass-api.de/api/interpreter?data=[out:json][timeout:25][bbox:50.5,6.9,50.88,7.4];(node[%22memorial:type%22=%22stolperstein%22];way[%22memorial:type%22=%22stolperstein%22];rel[%22memorial:type%22=%22stolperstein%22];);out%20meta;%3E;out%20meta%20qt;"
    )
      .then(res => res.json())
      .then(steine => {
        this.setState({ steine: steine.elements });
      })
      .catch(err => console.log("There was a problem loading data", err));
  }

  render() {
    const position = [this.state.lat, this.state.lon];
    // console.log(this.state.steine);
    const mapPosition = [50.729203, 7.099475];

    return (
      <div id="mapid" role="application">
        {this.state.steine.map(stein => {
          let position = [stein.lat, stein.lon];
          console.log(position);
        })}
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

          {/* {elements.map(stein => {
            <Marker position={position}>
              <Popup>
                <p className="mb-0" style={{ fontWeight: "bold" }}>
                  {stein.name}
                </p>
                <p className="mb-o">
                  <span style={{ fontWeight: "bold" }}>Date of birth: </span>
                  {stein.date_of_birth}
                </p>
                <p className="mb-o">
                  <span style={{ fontWeight: "bold" }}>Text on marker: </span>
                  {stein.text}
                </p>
                <img
                  src={`https://de.wikipedia.org/wiki/Liste_der_Stolpersteine_in_Bonn#/media/${
                    stein.image
                  }`}
                  alt="Image of a Stolperstein"
                />
              </Popup>
            </Marker>;
          })} */}
        </Map>
      </div>
    );
  }
}

export default ShowMap;
