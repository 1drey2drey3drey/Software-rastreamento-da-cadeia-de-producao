import CustomPopup from "./CustomPopup"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import React, { useState } from 'react';


// Fix CRÍTICO para os ícones
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";


L.Icon.Default.mergeOptions({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});


export default function Mapa() {
  const [showPopup, setShowPopup] = useState(false);
  const position = [-1.27804, -48.5393]; // Coordenadas da Ilha de Cotijuba
  

  return (
    <div
      style={{
        height: "80vh",
        width: "80%",
        margin: "auto",
        paddingTop: "20px",
      }}
    >
      <MapContainer
        center={position}
        zoom={13}
        style={{ height: "80vh", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        />
        <Marker
          position={position}
          eventHandlers={{
            click: () => {
              setShowPopup(true);
            },
          }}
        />
      </MapContainer>
      {showPopup && <CustomPopup onClose={() => setShowPopup(false)} />}
    </div>
  );
}
