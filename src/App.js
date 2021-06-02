import  React ,{useEffect}from 'react';
import ReactMapGL, { GeolocateControl, Marker } from 'react-map-gl';
import DeckGL from '@deck.gl/react';
import { LineLayer, GeoJsonLayer } from '@deck.gl/layers';
import PolylineOverlay from './Map';
 import axios from 'axios';
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
  // const selectedData = [{
  //   "inbound": 39490,
  //   "outbound": 39238,
  //   "from": {
  //     "name": "Chandigarh",
  //     "coordinates": [
  //       76.6273401,
  //       30.6983052
  //     ]
  //   },
  //   "to": {
  //     "name": "Ludhiana",
  //     "coordinates": [
  //       75.7866329,
  //       30.9003263
  //     ]
  //   }
  // },
  // ]
  const [points, setPoints] = React.useState([
    [76.6273401, 30.6983052],
    [76.49883, 30.79014],//Morinda
    [76.3883, 30.7845],//Sanghol
    [76.3463, 30.8152],//Khamano
    [76.2291, 30.8041],
    [76.191, 30.8357],
    [75.8066329, 30.8803263]
  ])
  const layer = new LineLayer({
    id: 'line-layer',
    // data: selectedData,
    pickable: true,
    getWidth: 2,
    getSourcePosition: d => d.from.coordinates,
    getTargetPosition: d => d.to.coordinates,
    getColor: d => [Math.sqrt(d.inbound + d.outbound), 140, 0]
  });

useEffect(() => {
  
  var start =  [76.6273401, 30.6983052];
  var end =[75.8066329, 30.8803263];
  axios.get(`https://api.mapbox.com/directions/v5/mapbox/cycling/${start[0]},${start[1]};${end[0]},${end[1]}?geometries=geojson&access_token=pk.eyJ1IjoidmlrYXMta3VtYXIxMiIsImEiOiJja3A2bXJvdWowNXlwMnVtdHk5djN1b3dnIn0.BlDmRBekr-9ib3ltf0aj5w`)
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });

//   fetch(`https://api.mapbox.com/directions/v5/mapbox/walking?access_token=pk.eyJ1IjoidmlrYXMta3VtYXIxMiIsImEiOiJja3A2bXJvdWowNXlwMnVtdHk5djN1b3dnIn0.BlDmRBekr-9ib3ltf0aj5w`, {
//   method: 'POST',
//   headers: {
//     'Accept': 'application/json',
//     'Content-Type': 'application/x-www-form-urlencoded',
//   },
//   body: 'coordinates=2.344003,48.85805;2.34675,48.85727',  // <--- Body changed to pass numbers instead of strings
// }).then(res => {
//   console.log(res)
// }).catch(err => {
//   console.log(err)
// })
},[])
  return (
    <DeckGL
      viewState={viewport}
      onViewStateChange={({ viewState }) => {
        setViewport(viewState);
      }}
      controller={true}
    >
      <ReactMapGL
        mapStyle="mapbox://styles/vikas-kumar12/ckp6th08s7mg118otvp91amgl"
        mapboxApiAccessToken={"pk.eyJ1IjoidmlrYXMta3VtYXIxMiIsImEiOiJja3A2bXJvdWowNXlwMnVtdHk5djN1b3dnIn0.BlDmRBekr-9ib3ltf0aj5w"}
        {...viewport}
        onViewportChange={(newView) => setViewport(newView)}
      >
        <GeolocateControl
          style={geolocateControlStyle}
          positionOptions={{ enableHighAccuracy: true }}
          trackUserLocation={true}
          auto
        />
        <PolylineOverlay points={points} />
        <Marker latitude={30.9003263} longitude={75.7866329} offsetTop={(-viewport.zoom * 5) / 2}>
          <img src="https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678111-map-marker-512.png" width={viewport.zoom * 5} height={viewport.zoom * 5}
          />
        </Marker>
      </ReactMapGL>
    </DeckGL>
  )
}
export default App;

