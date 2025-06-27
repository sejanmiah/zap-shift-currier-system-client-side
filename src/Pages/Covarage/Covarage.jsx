import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { FaMapMarkerAlt, FaTruck, FaWarehouse, FaLocationArrow } from "react-icons/fa";
import "leaflet/dist/leaflet.css";

const coverageData = [
  { name: "Dhaka", lat: 23.8103, lng: 90.4125, icon: <FaMapMarkerAlt size={24} color="#FF7711" /> },
  { name: "Chittagong", lat: 22.3569, lng: 91.7832, icon: <FaTruck size={24} color="#FF7711" /> },
  { name: "Sylhet", lat: 24.8949, lng: 91.8687, icon: <FaWarehouse size={24} color="#FF7711" /> },
  { name: "Khulna", lat: 22.8456, lng: 89.5403, icon: <FaLocationArrow size={24} color="#FF7711" /> },
  { name: "Rajshahi", lat: 24.3745, lng: 88.6042, icon: <FaMapMarkerAlt size={24} color="#FF7711" /> },
];

const Covarage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredLocations = coverageData.filter(location =>
    location.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-5">
      <h1 className="text-4xl font-bold mb-6">📍 Our Coverage Area</h1>

      <input
        type="text"
        placeholder="Search your city..."
        className="input input-bordered mb-5 w-full max-w-md"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <MapContainer
        center={[23.8103, 90.4125]}
        zoom={7}
        scrollWheelZoom={false}
        style={{ height: "500px", width: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {filteredLocations.map((location, idx) => (
          <Marker key={idx} position={[location.lat, location.lng]}>
            <Popup>
              <div className="flex items-center gap-2">
                {location.icon}
                <span className="font-semibold">{location.name}</span>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default Covarage;
