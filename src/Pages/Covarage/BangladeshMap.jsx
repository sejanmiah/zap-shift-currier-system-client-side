import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

// Fix Leaflet marker icon issue
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

const BangladeshMap = () => {
  const [warehouse, setWarehouse] = useState([]);
  const [search, setSearch] = useState('');
  const [filtered, setFiltered] = useState([]);

  const center = [23.685, 90.3563]; // Bangladesh center

  // Load warehouse data
  useEffect(() => {
    fetch('/warehouse.js')
      .then((res) => res.json())
      .then((data) => {
        setWarehouse(data);
        setFiltered(data); // show all by default
      })
      .catch((err) => console.error('Error loading data:', err));
  }, []);

  const handleSearch = () => {
    if (search.trim() === '') {
      setFiltered(warehouse); // Show all if search is empty
    } else {
      const matched = warehouse.filter(item =>
        item.district.toLowerCase().includes(search.trim().toLowerCase())
      );
      setFiltered(matched);
    }
  };

  return (
    <div className="space-y-4">
      {/* 🔍 Search Input */}
      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Search by district name"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
          className="border px-3 py-2 rounded w-full"
        />
        <button
          onClick={handleSearch}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Search
        </button>
      </div>

      {/* 🗺️ Map */}
      <div className="h-[500px] w-full rounded-xl overflow-hidden shadow-lg">
        <MapContainer center={center} zoom={7} scrollWheelZoom={true} style={{ height: '100%', width: '100%' }}>
          <TileLayer
            attribution='&copy; <a href="#">Sejan</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {/* ✅ Dynamic Markers (Filtered) */}
          {filtered.map((item, index) => (
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
    </div>
  );
};

export default BangladeshMap;
