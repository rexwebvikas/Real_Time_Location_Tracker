
// import './App.css';
// import React, { useState } from 'react';
// import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';
// import 'mapbox-gl/dist/mapbox-gl.css';
// import ReactMapGL from 'react-map-gl';
// function App() {
//   const [viewport, setViewport] = React.useState({
//     latitude: 37.7577,
//     longitude: -122.4376,
//     zoom: 8,
//     // width: Window.innerWidth,
//     // height: Window.innerHeight
//   });
//   return (
//     <div className="App">
//       <h1>hello</h1>
//       <ReactMapGL
//         mapboxApiAccessToken={
//           "pk.eyJ1IjoidmlrYXMta3VtYXIxMiIsImEiOiJja3A2bDB2eDMxNXFxMnFyMmt2azYzemptIn0.TibSyJogu9Hk1W9__uILUA"
//         }
//         {...viewport}
//         width="100%"
//         height="100%"
//         onViewportChange={(viewport) => setViewport(viewport)}
//       />
//     </div>
//   );
// }



import * as React from 'react';
import ReactMapGL,{Marker,Popup,GeolocateControl,NavigationControl,AttributionControl,Layer,ScaleControl,Source,LinearInterpolator} from 'react-map-gl';
import "./styles.css"
// import { Marker } from 'react-mapbox-gl';
const geolocateControlStyle= {
  right: 10,
  top: 10
};

// const navControlStyle= {
//   right: 10,
//   top: 10
// };

const attributionStyle= {
  right: 0,
  top: 0
};
const scaleControlStyle= {
  left: 20,
  bottom: 100
};
// const parkLayer = {
//   id: 'landuse_park',
//   type: 'fill',
//   source: 'mapbox',
//   'source-layer': 'landuse',
//   filter: ['==', 'class', 'park']
// };
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
       {/* <NavigationControl style={navControlStyle} />  */}
       
      {/* <AttributionControl compact={true} style={attributionStyle} /> */}
      {/* <Layer {...parkLayer} paint={{'fill-color': parkColor}} /> */}
       
      {/* <Marker latitude={31.0048} longitude={75.9463} offsetTop={(-viewport.zoom * 5) / 2}>
        <img src="https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678111-map-marker-512.png" width={viewport.zoom * 5} height={viewport.zoom * 5}
        
        />
        
        
        </Marker>       */}
      </ReactMapGL>
    );
  }
  
  export default App;





// import React, { useRef, useEffect, useState } from 'react';
// import mapboxgl from 'mapbox-gl';
// import './App.css';

// mapboxgl.accessToken =
//   'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4M29iazA2Z2gycXA4N2pmbDZmangifQ.-g_vE53SD2WrJ6tFX7QHmA';

// const App = () => {
//   const mapContainerRef = useRef(null);

//   const [lng, setLng] = useState(5);
//   const [lat, setLat] = useState(34);
//   const [zoom, setZoom] = useState(1.5);

//   // Initialize map when component mounts
//   useEffect(() => {
//     const map = new mapboxgl.Map({
//       container: mapContainerRef.current,
//       style: 'mapbox://styles/mapbox/streets-v11',
//       center: [lng, lat],
//       zoom: zoom
//     });

//     // Add navigation control (the +/- zoom buttons)
//     map.addControl(new mapboxgl.NavigationControl(), 'top-right');

//     map.on('move', () => {
//       setLng(map.getCenter().lng.toFixed(4));
//       setLat(map.getCenter().lat.toFixed(4));
//       setZoom(map.getZoom().toFixed(2));
//     });

//     // Clean up on unmount
//     return () => map.remove();
//   }, []); // eslint-disable-line react-hooks/exhaustive-deps

//   return (
//     <div>
//       <div className='sidebarStyle'>
//         <div>
//           Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
//         </div>
//       </div>
//       <div className='map-container' ref={mapContainerRef} />
//     </div>
//   );
// };

// export default App;