



import * as React from 'react';
import ReactMapGL,{GeolocateControl} from 'react-map-gl';
import "./styles.css"
// import { Marker } from 'react-mapbox-gl';
const geolocateControlStyle= {
  right: 10,
  top: 10
};

const geojson = {
  type: 'FeatureCollection',
  features: [
    {type: 'Feature', geometry: {type: 'Point', coordinates: [-122.4, 37.8]}}
  ]
};

const layerStyle = {
  id: 'point',
  type: 'circle',
  paint: {
    'circle-radius': 10,
    'circle-color': '#007cbf'
  }
};



function App() {
  const [viewport, setViewport] = React.useState({
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 8,
    width:window.innerWidth,
    height:window.innerHeight,
    //  pitch:50
  });
  const [parkColor, setParkColor] = React.useState('#8fa');
  
  return (
    <ReactMapGL
    mapStyle="mapbox://styles/vikas-kumar12/ckp6th08s7mg118otvp91amgl"
      mapboxApiAccessToken={"pk.eyJ1IjoidmlrYXMta3VtYXIxMiIsImEiOiJja3A2bXJvdWowNXlwMnVtdHk5djN1b3dnIn0.BlDmRBekr-9ib3ltf0aj5w"}
      {...viewport}

     

      onViewportChange={(newView) => setViewport(newView)}
      attributionControl={false} 
      > 
      <GeolocateControl
        style={geolocateControlStyle}
        positionOptions={{enableHighAccuracy: true}}
        trackUserLocation={true}
        auto
      />
      <ScaleControl maxWidth={100} unit="metric" style={scaleControlStyle} />
      <Source id="my-data" type="geojson" data={geojson}>
        <Layer {...layerStyle} />
      </Source>
      
      </ReactMapGL>
    );
  }
  
  export default App;

