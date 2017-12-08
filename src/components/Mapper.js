import React, { Component } from "react";
// import { render } from "react-dom";
// import Layzs from "./Layz";
// import Act from './actlease.zip';
import {
  Map,
  LayersControl,
  TileLayer,
  Marker,
  Popup,
  FeatureGroup,
  GeoJSON
} from "react-leaflet";


import layerdata from './geoprotrac.js'

const position = [29.761993, -95.366302];
const styles = {
  map: {
    width: "100%",
    height: "100%",
    position: "fixed"
  }
};

class Mapper extends Component {
  constructor(props){
    super(props);

    this.onEachFeature = this.onEachFeature.bind(this);
    this.handleFile = this.handleFile.bind(this);
    // this.readerLoad = this.readerLoad.bind(this);
    // this.getGeoJson = this.getGeoJson.bind(this);

      this.state ={
        geodata: null,
        gjson: layerdata
    }
  }

  readerLoad(e) {
    this.setState({
      geodata: e.target.result
    })
  }

  handleFile(e) {

      var reader = new FileReader();

          var file = e.target.files[0];

          reader.onload = function(upload) {

            this.readerLoad(upload);

          }.bind(this);

          reader.readAsArrayBuffer(file);
    }



  onEachFeature(feature, layer){
    if (feature.properties) {
      layer.bindPopup(Object.keys(feature.properties).map(function(k) {
        return k + ":" + feature.properties[k];
      }).join("<br />"), {
        maxHeight:200
      });
    }
  }

  render() {

    let ShapeLayerz = (
      <LayersControl.Overlay name="oil layer">
        <FeatureGroup color="red">
          {/* <ShapeFile
            data={this.state.geodata}
            onEachFeature={this.onEachFeature}
            isArrayBuffer={true}
          /> */}
        </FeatureGroup>
      </LayersControl.Overlay>
    )

    let geoLayer = (
      <LayersControl.Overlay checked name="gulf layer">
        <FeatureGroup color="red">

          <GeoJSON data={this.state.gjson} />

        </FeatureGroup>
      </LayersControl.Overlay>
    )


    // console.log(this.state.geodata)

    return (
      <div>
        <Map
          style={styles.map}
          center={position}
          zoom={4}
        >
{/* This Marker and Popup would not appear on the Layers Control*/}

          <Marker
            onclick={this.handleFile}
            position={[29.761993, -95.366302]}>
            <Popup>
              <span>
                A pretty CSS3 popup. <br /> Easily customizable.
              </span>
            </Popup>
          </Marker>

          <LayersControl position="topright">

{/* radio button */}

            <LayersControl.BaseLayer checked name="OpenStreetMap.BlackAndWhite">
              <TileLayer
                attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                url="https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png"
              />
            </LayersControl.BaseLayer>

{/* radio button  */}

            <LayersControl.BaseLayer  name="OpenStreetMap.Mapnik">
              <TileLayer
                attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                url='https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png'
              />
            </LayersControl.BaseLayer>


{/* checkbox */}

            {ShapeLayerz}

            {geoLayer}


          </LayersControl>
        </Map>
      </div>
    );
  }
}

export default Mapper;



// url="https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png"
