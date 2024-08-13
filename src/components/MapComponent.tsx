// src/components/MapComponent.tsx
import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

export interface MapMarker {
  lat: number;
  lng: number;
  country: string;
  active: number;
  recovered: number;
  deaths: number;
}

interface MapComponentProps {
  markers: MapMarker[];
}

// Function to create a custom icon
const createCustomIcon = (url: string) => {
  return new L.Icon({
    iconUrl: url,
    iconSize: [10, 17],  
    iconAnchor: [16, 32],  
    popupAnchor: [0, -32],  
  });
};

// Rendering country wise data using map

const MapComponent: React.FC<MapComponentProps> = ({ markers }) => {
  return (
    <MapContainer
      center={[51.1657, 10.4515]}
      zoom={2}
    className="w-full max-w-7xl  h-full flex justify-center items-center"
      key={0}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {markers.map((marker, index) => (
        <Marker
          key={index}
          position={[marker.lat, marker.lng]}
          icon={createCustomIcon(
            "https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon-2x.png"
          )}
        >
          <Popup>
            <b>{marker.country}</b>
            <br />
            Active: {marker.active}
            <br />
            Recovered: {marker.recovered}
            <br />
            Deaths: {marker.deaths}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default MapComponent;
