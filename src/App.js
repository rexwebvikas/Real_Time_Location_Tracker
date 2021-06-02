



// import * as React from 'react';
// import ReactMapGL,{GeolocateControl,Marker} from 'react-map-gl';
// import "./styles.css"
// import DeckGL from '@deck.gl/react';
// import {LineLayer,GeoJsonLayer} from '@deck.gl/layers';
// const geolocateControlStyle= {
//   right: 10,
//   top: 10
// };


// const geojson = {
//   type: 'FeatureCollection',
//   features: [
//     {type: 'Feature', geometry: {type: 'Point', coordinates: [-122.4, 37.8]}}
//   ]
// };




// function App({viewState,data}) {
//   const [viewport, setViewport] = React.useState({
//     latitude: 37.7577,
//     longitude: -122.4376,
//     zoom: 8,
//     width:window.innerWidth,
//     height:window.innerHeight,
//     //  pitch:50
//   });
//   // const [parkColor, setParkColor] = React.useState('#8fa');
//   // const layer = new LineLayer({
//   //   id: 'line-layer',
//   //   data,
//   //   pickable: true,
//   //   getWidth: 50,
//   //   getSourcePosition: d => d.from.coordinates,
//   //   getTargetPosition: d => d.to.coordinates,
//   //   getColor: d => [Math.sqrt(d.inbound + d.outbound), 140, 0]
//   // });




// //   data = [{
// //     inbound: 72633,
// //    outbound: 74735,
// //     from: {
// //       name: 'chnadigard',
// //      coordinates: [ 37.7577, -122.4376]
// //    },
// //     to: {
// //       name: '12th St. Oakland City Center (12TH)',
// //       coordinates: [31.0048, 75.9463]
// //   }   }  
// // ]


//   // const layer = new LineLayer({
//   //   id: 'line-layer',
//   //   data,
//   //   pickable: true,
//   //   getWidth: 50,
//   //   getSourcePosition: d => d.from.coordinates,
//   //   getTargetPosition: d => d.to.coordinates,
//   //   getColor: d => [Math.sqrt(d.inbound + d.outbound), 140, 0]
//   // });

//   // const layer = new GeoJsonLayer({
//   //   id: 'geojson-layer',
//   //   data : 'https://raw.githubusercontent.com/visgl/deck.gl-data/master/website/bart.geo.json',
//   //   pickable: true,
//   //   stroked: false,
//   //   filled: true,
//   //   extruded: true,
//   //   lineWidthScale: 20,
//   //   lineWidthMinPixels: 2,
//   //   getFillColor: [160, 160, 180, 200],
//   //   // getLineColor: d => colorToRGBArray(d.properties.color),
//   //   getRadius: 100,
//   //   getLineWidth: 1,
//   //   getElevation: 30
//   // });





//   return (
//     <ReactMapGL
//     mapStyle="mapbox://styles/vikas-kumar12/ckp6th08s7mg118otvp91amgl"
//       mapboxApiAccessToken={"pk.eyJ1IjoidmlrYXMta3VtYXIxMiIsImEiOiJja3A2bXJvdWowNXlwMnVtdHk5djN1b3dnIn0.BlDmRBekr-9ib3ltf0aj5w"}
//       {...viewport}



//       onViewportChange={(newView) => setViewport(newView)}

//       > 
//       <GeolocateControl
//         style={geolocateControlStyle}
//         positionOptions={{enableHighAccuracy: true}}
//         trackUserLocation={true}
//         auto
//       />


//        <Marker latitude={31.0048} longitude={75.9463} offsetTop={(-viewport.zoom * 5) / 2}>
//         <img src="https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678111-map-marker-512.png" width={viewport.zoom * 5} height={viewport.zoom * 5}

//         />


//         </Marker>  

// {/* 
//         <DeckGL viewState={viewState}
//     layers={[layer]}
//     getTooltip={({object}) => object && `${object.from.name} to ${object.to.name}`} />; */}

//  {/* <DeckGL viewState={viewState} */}
//     layers={[layer]}
//     getTooltip={({object}) => object && (object.properties.name || object.properties.station)} />; 


//       </ReactMapGL>
//     );
//   }

//   export default App;





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

// import * as React from 'react';
// import ReactMapGL,{GeolocateControl,Marker} from 'react-map-gl';
// import DeckGL from '@deck.gl/react';
// import {LineLayer,GeoJsonLayer} from '@deck.gl/layers';
// // import { Marker } from 'react-mapbox-gl';
// const geolocateControlStyle= {
//   right: 10,
//   top: 10
// };


// const geojson = {
//   type: 'FeatureCollection',
//   features: [
//     {type: 'Feature', geometry: {type: 'Point', coordinates: [-122.4, 37.8]}}
//   ]
// };
// function App({viewState,data}) {
//   const [viewport, setViewport] = React.useState({
//     latitude: 30.9003263,
//     longitude: 75.7866329,
//     zoom: 8,
//     width:window.innerWidth,
//     height:window.innerHeight,
//   });
//   const [parkColor, setParkColor] = React.useState('#8fa');
//   const selectedData = [{
//     "inbound": 39490,
//     "outbound": 39238,
//     "from": {
//       "name": "chandigrad",
//       "coordinates": [

//         75.7866329,
//         30.9003263
//       ]
//     },
//     "to": {
//       "name": "palampur",
//       "coordinates": [
//         32.1109,
//         76.5363
//       ]
//     }
//   },
// ]
//   const layer = new LineLayer({
//     id: 'line-layer',
//     data:selectedData,
//     pickable: true,
//     getWidth: 2,
//     getSourcePosition: d => d.from.coordinates,
//     getTargetPosition: d => d.to.coordinates,
//     getColor: d => [Math.sqrt(d.inbound + d.outbound), 140, 0]
//   });
//   return (
//     <DeckGL
//     viewState={viewport}
//     onViewStateChange={({ viewState }) => {
//       setViewport(viewState);
//     }}
//     controller={true}
//     layers={layer}
//   >
//     <ReactMapGL
//     mapStyle="mapbox://styles/vikas-kumar12/ckp6th08s7mg118otvp91amgl"
//       mapboxApiAccessToken={"pk.eyJ1IjoidmlrYXMta3VtYXIxMiIsImEiOiJja3A2bXJvdWowNXlwMnVtdHk5djN1b3dnIn0.BlDmRBekr-9ib3ltf0aj5w"}
//       {...viewport}
//       onViewportChange={(newView) => setViewport(newView)}
//       // attributionControl={false}
//       >
//       <GeolocateControl
//         style={geolocateControlStyle}
//         positionOptions={{enableHighAccuracy: true}}
//         trackUserLocation={true}
//         auto
//       />
//       {/* <ScaleControl maxWidth={100} unit="metric" style={scaleControlStyle} />
//       <Source id="my-data" type="geojson" data={geojson}>
//         <Layer {...layerStyle} />
//       </Source> */}
//        {/* <NavigationControl style={navControlStyle} />  */}
//       {/* <AttributionControl compact={true} style={attributionStyle} /> */}
//       {/* <Layer {...parkLayer} paint={{'fill-color': parkColor}} /> */}
//        <Marker latitude={ 32.1109} longitude={76.5363} offsetTop={(-viewport.zoom * 5) / 2}>
//         <img src="https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678111-map-marker-512.png" width={viewport.zoom * 5} height={viewport.zoom * 5}
//         />
//         </Marker>
// {/*
//         <DeckGL viewState={viewState}
//     layers={[layer]}
//     getTooltip={({object}) => object && `${object.from.name} to ${object.to.name}`} />; */}
//     </ReactMapGL>
//     </DeckGL>
//     )
//   }
//   export default App;







import * as React from 'react';
import ReactMapGL, { GeolocateControl, Marker } from 'react-map-gl';
import DeckGL from '@deck.gl/react';
import { LineLayer, GeoJsonLayer } from '@deck.gl/layers';
import PolylineOverlay from './Map';
// import { Marker } from 'react-mapbox-gl';
const geolocateControlStyle = {
  right: 10,
  top: 10
};
function App({ viewState, data }) {
  const [viewport, setViewport] = React.useState({
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 8,
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const [parkColor, setParkColor] = React.useState('#8fa');
  const selectedData = [{
    "inbound": 39490,
    "outbound": 39238,
    "from": {
      "name": "Chandigarh",
      "coordinates": [
        76.6273401,
        30.6983052
      ]
    },
    "to": {
      "name": "Ludhiana",
      "coordinates": [
        75.7866329,
        30.9003263
      ]
    }
  },
  ]
  const [points, setPoints] = React.useState([
    [76.6273401,30.6983052],
    [76.49883,30.79014],//Morinda
    [76.3883,30.7845],//Sanghol
    [76.3463,30.8152],//Khamano
    [75.7866329,30.9003263]
    // [-122.483696, 37.833818],
    // [-122.483482, 37.833174],
    // [-122.483396, 37.8327],
    // [-122.483568, 37.832056],
    // [-122.48404, 37.831141],
    // [-122.48404, 37.830497],
    // [-122.483482, 37.82992],
    // [-122.483568, 37.829548],
    // [-122.48507, 37.829446],
    // [-122.4861, 37.828802],
    // [-122.486958, 37.82931],
    // [-122.487001, 37.830802],
    // [-122.487516, 37.831683],
    // [-122.488031, 37.832158],
    // [-122.488889, 37.832971],
    // [-122.489876, 37.832632],
    // [-122.490434, 37.832937],
    // [-122.49125, 37.832429],
    // [-122.491636, 37.832564],
    // [-122.492237, 37.833378],
    // [-122.493782, 37.833683]
  ])
  const layer = new LineLayer({
    id: 'line-layer',
    data: selectedData,
    pickable: true,
    getWidth: 2,
    getSourcePosition: d => d.from.coordinates,
    getTargetPosition: d => d.to.coordinates,
    getColor: d => [Math.sqrt(d.inbound + d.outbound), 140, 0]
  });
  return (
    <DeckGL
      viewState={viewport}
      onViewStateChange={({ viewState }) => {
        setViewport(viewState);
      }}
      controller={true}
    // layers={layer}
    >
      <ReactMapGL
        mapStyle="mapbox://styles/vikas-kumar12/ckp6th08s7mg118otvp91amgl"
        mapboxApiAccessToken={"pk.eyJ1IjoidmlrYXMta3VtYXIxMiIsImEiOiJja3A2bXJvdWowNXlwMnVtdHk5djN1b3dnIn0.BlDmRBekr-9ib3ltf0aj5w"}
        {...viewport}
        onViewportChange={(newView) => setViewport(newView)}
      // attributionControl={false}
      >
        <GeolocateControl
          style={geolocateControlStyle}
          positionOptions={{ enableHighAccuracy: true }}
          trackUserLocation={true}
          auto
        />
        <PolylineOverlay points={points} />
        {/* <ScaleControl maxWidth={100} unit="metric" style={scaleControlStyle} />
      <Source id="my-data" type="geojson" data={geojson}>
        <Layer {...layerStyle} />
      </Source> */}
        {/* <NavigationControl style={navControlStyle} />  */}
        {/* <AttributionControl compact={true} style={attributionStyle} /> */}
        {/* <Layer {...parkLayer} paint={{'fill-color': parkColor}} /> */}
        <Marker latitude={30.9003263} longitude={75.7866329} offsetTop={(-viewport.zoom * 5) / 2}>
          <img src="https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678111-map-marker-512.png" width={viewport.zoom * 5} height={viewport.zoom * 5}
          />
        </Marker>
        {/*
        <DeckGL viewState={viewState}
    layers={[layer]}
    getTooltip={({object}) => object && `${object.from.name} to ${object.to.name}`} />; */}
      </ReactMapGL>
    </DeckGL>
  )
}
export default App;

