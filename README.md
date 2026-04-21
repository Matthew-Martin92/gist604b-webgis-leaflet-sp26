# GIST 604B – WebGIS & Full-Stack Orchestration
Repository for building an interactive web mapping application using HTML, CSS, JavaScript, and Leaflet.

## Repository Structure
    .
    ├── data/
    │   ├── your_point_layer.geojson
    │   ├── your_line_layer.geojson
    │   └── your_polygon_layer.geojson
    ├── js/
    │   └── your_js_file.js
    ├── css/
    │   └── your_css_file.css
    ├── index.html
    ├── package.json
    ├── package-lock.json
    ├── .gitignore
    └── README.md

## Notes
- Replace the placeholder filenames in `data/`, `js/`, and `css/` with your own files.
- All GeoJSON datasets must be in WGS84 (EPSG:4326) and placed in the `data/` folder.
- Run `npm install` to install dependencies and `npm start` to launch the local development server.
- Open `http://localhost:8080` in your browser to preview your map during development.
- The final web map is published using GitHub Pages.
