import React from "react";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  // InfoWindow,
} from "@react-google-maps/api";
import "./App.css"
import mapStyles from "./mapStyles";


const libraries = ["places"];
const mapContainerStyle = {
  width: "100%",
  height: "100%",
  position: "absolute",
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
    googleMapsApiKey: 
    process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries,
  });
  const [markers, setMarkers] = React.useState([]);

  if (loadError) return "Error";
  if (!isLoaded) return "Loading...";

  return (
  <div>
    <div className="header-container">
      <button
className="header-1 button"
        >Shows
      </button> 
      <button 
      className="header-2 button">Artists
      </button>
      <button 
        className="header-3 button">Venues
      </button>
    </div>
        
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
