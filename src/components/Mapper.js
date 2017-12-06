import React, { Component } from "react";
// import { render } from "react-dom";
// import Layzs from "./Layz";
import {
  Map,
  LayersControl,
  TileLayer,
  Marker,
  Popup,
  FeatureGroup,
  Circle
} from "react-leaflet";

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
        <Map style={styles.map} center={position} zoom={4}>
          <LayersControl position="topright">
            <LayersControl.BaseLayer name="OpenStreetMap.BlackAndWhite">
              <TileLayer
                attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                url="https://tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png"
              />
            </LayersControl.BaseLayer>
            <LayersControl.BaseLayer name="OpenStreetMap.Mapnik">
              <TileLayer
                attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
            </LayersControl.BaseLayer>
            <LayersControl.Overlay name="Marker with popup">
              <Marker position={[29.761993, -95.366302]}>
                <Popup>
                  <span>
                    A pretty CSS3 popup. <br /> Easily customizable.
                  </span>
                </Popup>
              </Marker>
            </LayersControl.Overlay>
            <LayersControl.Overlay name="Feature group">
              <FeatureGroup color="purple">
                <Popup>
                  <span>Popup in FeatureGroup</span>
                </Popup>
                <Circle center={[29.761993, -95.366302]} radius={200} />
              </FeatureGroup>
            </LayersControl.Overlay>
          </LayersControl>
        </Map>
      </div>
    );
  }
}

export default Mapper;

// url="https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png"
