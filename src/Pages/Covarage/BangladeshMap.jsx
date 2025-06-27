import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

const BangladeshMap = () => {
  const [warehouse, setWarehouse] = useState([]);
  const center = [23.685, 90.3563]; // Bangladesh center

  useEffect(() => {
    fetch('/warehouse.js')
      .then((res) => res.json())
      .then((data) => {
        setWarehouse(data);
      })
      .catch((err) => {
        console.error('Failed to load warehouse data:', err);
      });
  }, []);

  return (
    <div className="h-[500px] w-full rounded-xl overflow-hidden shadow-lg">
      <MapContainer center={center} zoom={7} scrollWheelZoom={true} style={{ height: '100%', width: '100%' }}>
        <TileLayer
          attribution='&copy; <a href="#">Sejan</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {warehouse.map((item, index) => (
          <Marker key={index} position={[item.latitude, item.longitude]}>
            <Popup>
              <strong>{item.district}</strong><br />
              Covered: {item.covered_area.join(', ')}<br />
              <a
                href={item.flowchart}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline"
              >
                View Flowchart
              </a>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default BangladeshMap;
