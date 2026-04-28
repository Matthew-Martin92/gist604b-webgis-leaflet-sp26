//map_code.js
//Loads GeoJSON data and displays Schools, Streets, and Land Use using Leaflet

// ================================================
//Step 1: Initialize the Map
// ================================================

//Create Leaflet map in the "map" div
// setView([lat, lon], zoom)
var map = L.map('map').setView([34.0296,-117.0631], 13.5);

// ================================================
//Step 2: Add Basemap
// ================================================

//Tile layer provides visual background
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);


// ================================================
//Step 3: Add/Customize controls
// ================================================

// Move Zoom buttons (defult + topleft)
map.zoomControl.setPosition('topright');

// add a scale bar
L.control.scale().addTo(map);

// ================================================
//Step 4: Create layer groups
// ================================================

// Layer groups allow toggling layers on/off
const lineLayer = L.layerGroup().addTo(map);
const pointLayer = L.layerGroup().addTo(map);
const polygonLayer = L.layerGroup().addTo(map);

// UI to toggle layers
L.control.layers(null, {
    'Streets': lineLayer,
    'Schools': pointLayer,
    'Land Use': polygonLayer
}).addTo(map);

// ================================================
//Step 5: Load Point Data (Schools)
// ================================================
fetch('data/yucaipa_schools.geojson')
    .then(res => res.json())
    .then(data => {L.geoJSON(data, {
        //Style points as 
        pointToLayer: function(feature, latlng) {
            return L.circleMarker(latlng,{
                radius: 6,
                fillColor: '#3724e7',
                color: '#ffffff',
                weight: 1,
                fillOpacity: 0.9,
            })
        },

        //add popups
        onEachFeature: function(feature, layer) {
            const name = feature.properties.name || 'School';
            layer.bindPopup(`<strong>${name}</strong>`);
        }
    }).addTo(pointLayer);
})
.catch(err => console.error('Error loading schools'))


