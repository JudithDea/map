import React, { Component } from "react";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";

class ShowMap extends Component {
  state = {
    steine: [
      {
        id: 732473819,
        position: [50.73863, 7.1174091],
        name: "Erna Kaufmann",
        date_of_birth: "1903",
        text:
          "Hier wohnte Erna Kaufmann geb. Oster Jg. 1903 deportiert 1942 Ziel unbekannt verschollen",
        image:
          "File:Stolpersteins_Karl_Kaufmann%2C_Ludwig_Kaufmann%2C_Ruth_Kaufmann%2C_Erna_Kaufmann_Crossing_Friedrich-Breuer-Stra%C3%9Fe%2C_Gottfried-Claren-Stra%C3%9Fe_Bonn.JPG"
      },
      {
        id: 732500741,
        position: [50.7385646, 7.1167357],
        name: "Ella Herz",
        date_of_birth: "1867",
        text:
          "Hier wohnte Ella Herz geb. Neumann Jg. 1867 deportiert 1942 Theresienstadt verschollen in Treblinka",
        image:
          "File:Stolpersteins_Alfred_Herz%2C_Lucie_Herz%2C_Ella_Herz%2C_Ingeborg_Herz_Friedrich-Breuer-Stra%C3%9Fe_25_Bonn.JPG"
      },
      {
        id: 811772382,
        position: [50.7270855, 7.0972615],
        name: "Cäsar Bukofzer",
        date_of_birth: "1886-09-08",
        text:
          "Hier wohnte Cäsar Bukofzer Jg. 1886 deportiert 1942 verschollen in Auschwitz",
        image:
          "File:Stolpersteine_C%C3%A4sar_Bukofzer%2C_Julie_Bukofzer%2C_Argelanderstra%C3%9Fe_10%2C_Bonn.JPG"
      },
      {
        id: 814018389,
        position: [50.6911847, 7.1599095],
        name: "Sara Auerbach",
        date_of_birth: "1871",
        text:
          "Hier wohnte Sara Auerbach Jg. 1871 deportiert 1942 Theresienstadt tot 16.1.1943",
        image: "File:Stolperstein_Sara_Auerbach_Viktoriastra%C3%9Fe_3_Bonn.JPG"
      },
      {
        id: 830374061,
        position: [50.7371136, 7.0962884],
        name: "Paula Jonas",
        date_of_birth: "1892",
        text: "Hier wohnte Paula Jonas Jg. 1892 deportiert 1941 tot",
        image:
          "File:Stolperstein_Paula_Jonas%2C_Breite_Stra%C3%9Fe_8%2C_Bonn.JPG"
      },
      {
        id: 831251686,
        position: [50.7105994, 7.1104217],
        name: "Bernhard Marx",
        date_of_birth: "1897",
        text:
          "Hier wohnte Bernhard Marx Jg. 1897 deportiert 20.7.1942 Minsk ermordet 24.7.1942",
        image:
          "File:Stolpersteins_Bernhard_Marx%2C_Erna_Marx%2C_Julie_Marx%2C_Helena_Marx_Burbacher_Stra%C3%9Fe_251_Bonn.JPG"
      },
      {
        id: 831274352,
        position: [50.7247345, 7.0968286],
        name: "Siegmund Fauerbach",
        date_of_birth: "1858",
        text:
          "Hier wohnte Siegmund Fauerbach Jg. 1858 interniert 1942 Sammellager Bonn-Endenich tot 23.3.1942",
        image:
          "File:Stolpersteine_Siegmund_Fauerbach%2C_Eisabeth_Fauerbach%2C_Helene_Fauerbach%2C_Dorothea_Fauerbach%2C_Hans_Peter_Fauerbach%2C_Kurf%C3%BCrstenstra%C3%9Fe_33%2C_Bonn.JPG"
      },
      {
        id: 940477131,
        position: [50.682074, 7.1486897],
        name: "Bertha Frenkel",
        date_of_birth: "1873",
        text:
          "Hier wohnte Bertha Frenkel geb. Drücker Jg. 1873 interniert 1942 Kloster Endenich tot 3.2.1942",
        image:
          "File:Stolpersteins_Raphael_Frenkel%2C_Bertha_Frenkel%2C_Erna_Frenkel_Crossing_Burgstra%C3%9Fe_Im_%C3%84uelchen_Bonn.JPG"
      }
    ]
  };

  render() {
    // const position = [this.state.lat, this.state.lon];
    const mapPosition = [50.729203, 7.099475];
    return (
      <div id="mapid" role="application">
        <Map
          center={mapPosition}
          zoom={14}
          style={{
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

          {this.state.steine.map(stein => (
            <Marker position={stein.position} key={stein.id}>
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
                  alt="Image"
                />
              </Popup>
            </Marker>
          ))}
        </Map>
      </div>
    );
  }
}

export default ShowMap;
