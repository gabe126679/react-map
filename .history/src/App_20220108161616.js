import React from "react";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  // InfoWindow,
} from "@react-google-maps/api";

import mapStyles from "./mapStyles";

const libraries = ["places"];
const mapContainerStyle = {
  width: "100vw",
  height: "100vh",
  right: 10,
  top: 10
};
const options = {
  styles: mapStyles,
  disableDefaultUI: true,
  zoomControl: true,
};
const center = {
  lat: 43.6532,
  lng: -79.3832,
};

function App() {

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyAKwghvePHmhCb62bCZ1ZzS3YgW6CFmzeo",
    libraries,
  });
  const [markers, setMarkers] = React.useState([]);

  if (loadError) return "Error";
  if (!isLoaded) return "Loading...";

  return (
    <div>
      <button 
        style={{
          color: 'blue'
        }}>Primary</button>
        
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={8}
        center={center}
        options={options}
        onClick={(e) =>{
          setMarkers(current => [...current, {
            lat: e.latLng.lat(),
            lng: e.latLng.lng(),
            time: new Date(),
          }])
        }}
      >
        {markers.map((marker) => (
          <Marker 
            key={marker.time.toISOString()}
            position={{ lat: marker.lat, lng: marker.lng}}
          />
        ))}
      </GoogleMap>
    </div>
  );
}

export default App;
