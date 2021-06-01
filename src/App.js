



import * as React from 'react';
import ReactMapGL,{GeolocateControl,Marker} from 'react-map-gl';
import "./styles.css"
import DeckGL from '@deck.gl/react';
import {LineLayer,GeoJsonLayer} from '@deck.gl/layers';
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




function App({viewState,data}) {
  const [viewport, setViewport] = React.useState({
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 8,
    width:window.innerWidth,
    height:window.innerHeight,
    //  pitch:50
  });
  const [parkColor, setParkColor] = React.useState('#8fa');
  // const layer = new LineLayer({
  //   id: 'line-layer',
  //   data,
  //   pickable: true,
  //   getWidth: 50,
  //   getSourcePosition: d => d.from.coordinates,
  //   getTargetPosition: d => d.to.coordinates,
  //   getColor: d => [Math.sqrt(d.inbound + d.outbound), 140, 0]
  // });




  data = [{
    inbound: 72633,
   outbound: 74735,
    from: {
      name: 'chnadigard',
     coordinates: [ 37.7577, -122.4376]
   },
    to: {
      name: '12th St. Oakland City Center (12TH)',
      coordinates: [31.0048, 75.9463]
  }   }  
]


  // const layer = new LineLayer({
  //   id: 'line-layer',
  //   data,
  //   pickable: true,
  //   getWidth: 50,
  //   getSourcePosition: d => d.from.coordinates,
  //   getTargetPosition: d => d.to.coordinates,
  //   getColor: d => [Math.sqrt(d.inbound + d.outbound), 140, 0]
  // });

  const layer = new GeoJsonLayer({
    id: 'geojson-layer',
    data,
    pickable: true,
    stroked: false,
    filled: true,
    extruded: true,
    lineWidthScale: 20,
    lineWidthMinPixels: 2,
    getFillColor: [160, 160, 180, 200],
    // getLineColor: d => colorToRGBArray(d.properties.color),
    getRadius: 100,
    getLineWidth: 1,
    getElevation: 30
  });



  
  
  return (
    <ReactMapGL
    mapStyle="mapbox://styles/vikas-kumar12/ckp6th08s7mg118otvp91amgl"
      mapboxApiAccessToken={"pk.eyJ1IjoidmlrYXMta3VtYXIxMiIsImEiOiJja3A2bXJvdWowNXlwMnVtdHk5djN1b3dnIn0.BlDmRBekr-9ib3ltf0aj5w"}
      {...viewport}

     

      onViewportChange={(newView) => setViewport(newView)}
    
      > 
      <GeolocateControl
        style={geolocateControlStyle}
        positionOptions={{enableHighAccuracy: true}}
        trackUserLocation={true}
        auto
      />
    
       
       <Marker latitude={31.0048} longitude={75.9463} offsetTop={(-viewport.zoom * 5) / 2}>
        <img src="https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678111-map-marker-512.png" width={viewport.zoom * 5} height={viewport.zoom * 5}
        
        />
        
        
        </Marker>  

{/* 
        <DeckGL viewState={viewState}
    layers={[layer]}
    getTooltip={({object}) => object && `${object.from.name} to ${object.to.name}`} />; */}

<DeckGL viewState={viewState}
    layers={[layer]}
    getTooltip={({object}) => object && (object.properties.name || object.properties.station)} />;

     
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