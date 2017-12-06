import React, { Component } from "react";
import { render } from "react-dom";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import Layzs from "./Layz";

const position = [29.761993, -95.366302];
const styles = {
  map: {
    width: "100%",
    height: "100%",
    position: "fixed"
  }
};

class Mapper extends Component {
  render() {
    return (
      <div>
        <Map
          style={styles.map}
          center={position}
          zoom={4}>
          <TileLayer
            url='https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png'
            attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
          />
          <Marker position={position}>
            <Popup>
              <span>
                I'm here bro <br /> Yup.
              </span>
            </Popup>
          </Marker>
        </Map>
        <Layzs />
      </div>
    );
  }
}
export default Mapper;
