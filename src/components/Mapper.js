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
        <Map
          style={styles.map}
          center={position}
          zoom={4}
        >
          <LayersControl position="topright">

{/* radio button */}

            <LayersControl.BaseLayer  name="OpenStreetMap.BlackAndWhite">
              <TileLayer
                attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                url="https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png"
              />
            </LayersControl.BaseLayer>

{/* radio button  */}

            <LayersControl.BaseLayer checked name="OpenStreetMap.Mapnik">
              <TileLayer
                attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                url='https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png'
              />
            </LayersControl.BaseLayer>

{/* checkbox */}

            <LayersControl.Overlay
              name="Marker with popup"
            >
              <Marker position={[29.761993, -95.366302]}>
                <Popup>
                  <span>
                    A pretty CSS3 popup. <br /> Easily customizable.
                  </span>
                </Popup>
              </Marker>
            </LayersControl.Overlay>

{/* checkbox */}

            <LayersControl.Overlay
              name="Feature group"
            >
              <FeatureGroup
                color="purple"
              >
                  <Popup>
                    <span>Popup in FeatureGroup</span>
                  </Popup>

                  <Circle
                    center={[29.761993, -95.366302]}
                    radius={2000}
                  />
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
