import React from "react";
import {
  GoogleMap,
  useLoadScript,
  // Marker,
  // InfoWindow,
} from "@react-google-maps/api";

import mapStyles from "./mapStyles";

const libraries = ["places"];
const mapContainerStyle = {
  margin: 0 auto;
  height: "100vh",
  width: "100vw",
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
  if (loadError) return "Error";
  if (!isLoaded) return "Loading...";

  return (
    <div>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={8}
        center={center}
      ></GoogleMap>
    </div>
  );
}

export default App;
