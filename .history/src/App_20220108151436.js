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
  height: "100vh",
  width: "100vw",
};
const center = {
  lat: 43.6532,
  lng: -79.3832,
};

function App() {
  return (
    <div>
      <h1>hello</h1>
    </div>
  );
}

export default App;
