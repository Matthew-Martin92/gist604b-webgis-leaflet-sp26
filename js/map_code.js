//map_code.js
//Loads GeoJSON data and displays Schools, Streets, and Land Use using Leaflet

// ================================================
//Step 1: Initialize the Map
// ================================================

//Create Leaflet map in the "map" div
// setView([lat, lon], zoom)
const map = L.map('map').setView([34.0336,-117.0431], 50)

// ================================================
//Step 2: Add Basemap
// ================================================

//Tile layer provides visual background
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);