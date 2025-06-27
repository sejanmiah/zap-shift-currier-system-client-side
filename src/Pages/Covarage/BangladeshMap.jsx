import React, { useEffect, useState, useRef } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
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

  const mapRef = useRef(null);
  const center = [23.685, 90.3563]; // Bangladesh center

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
      const matched = warehouse.filter((item) =>
        item.district.toLowerCase().includes(search.trim().toLowerCase())
      );
      setFiltered(matched);
    }
  };

  // Custom component to update map view based on filtered markers
  const MapBoundsUpdater = () => {
    const map = useMap();

    useEffect(() => {
      if (filtered.length === 0) return;

      if (filtered.length === 1) {
        // If only one marker, fly to that location and zoom in
        map.flyTo([filtered[0].latitude, filtered[0].longitude], 12, {
          duration: 1.5,
        });
      } else {
        // If multiple markers, fit bounds so all markers visible
        const bounds = L.latLngBounds(
          filtered.map((item) => [item.latitude, item.longitude])
        );
        map.fitBounds(bounds, { padding: [50, 50] });
      }
    },);

    return null;
  };

  return (
    <div className="w-full h-screen p-4">
      {/* 🔍 Search Input */}
      <div className="mb-4 flex items-center justify-center gap-5 max-w-md mx-auto">
        <input
          type="text"
          placeholder="Search by district"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
          className="border px-3 py-2 rounded w-full"
        />
        <button
          onClick={handleSearch}
          className="px-4 py-2 bg-blue-600 text-white rounded"
        >
          Search
        </button>
      </div>

      {/* 🗺️ Map */}
      <MapContainer
        center={center}
        zoom={7}
        style={{ height: '80vh', width: '100%' }}
        whenCreated={(mapInstance) => (mapRef.current = mapInstance)}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; OpenStreetMap contributors"
        />

        {/* Update map bounds when filtered changes */}
        <MapBoundsUpdater />

        {/* ✅ Dynamic Markers (Filtered) */}
        {filtered.map((item, index) => (
          <Marker
            key={index}
            position={[item.latitude, item.longitude]}
            title={item.district}
          >
            <Popup>
              <strong>{item.district}</strong> <br />
              Covered: {item.covered_area.join(', ')} <br />
              <a href={item.flowchart} target="_blank" rel="noopener noreferrer">
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
