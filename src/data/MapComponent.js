// src/data/MapComponent.js
import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Custom marker icon (drop pin)
const customIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png", // URL for drop pin icon
  iconSize: [20, 25], // Adjust icon size
  iconAnchor: [15, 25], // Anchor at the bottom of the pin
  popupAnchor: [0, -10], // Position the popup above the pin
});

const MapComponent = ({ center, zoom, markers }) => {
  return (
    <MapContainer
      center={center}
      zoom={zoom}
      style={{ height: "500px", width: "100%" }}
    >
      {/* Base Map Layer */}
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
       
      />
      {/* Add Markers */}
      {markers.map((marker, index) => (
        <Marker
          key={index}
          position={[marker.lat, marker.lng]}
          icon={customIcon}
        >
          <Popup>{marker.name}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default MapComponent;
