# COVID-19 Thematic Maps of the United States

## Project Overview
This project presents two interactive thematic maps of COVID-19 cases and rates in the United States at the county level. The goal is to visualize the impact of COVID-19 during 2020 using both a **choropleth map** (case rates per 1,000 residents) and a **proportional symbols map** (total case counts).  

These maps are designed to help users explore the spatial distribution of COVID-19 across U.S. counties, understand areas with high case counts or high infection rates, and interact with the data for more detailed insights.

---

## Maps
- **Choropleth Map of COVID-19 Rates** – `map1.html`  
  Visualizes the number of COVID-19 cases per 1,000 residents at the county level. Counties are colored based on case rates using a gradient scale.

- **Proportional Symbols Map of COVID-19 Cases** – `map2.html`  
  Displays total COVID-19 cases in 2020 using circles whose sizes are proportional to the number of cases in each county. Users can click on the circles to see detailed information.

### Links
- Choropleth Map: [map1.html](https://[your_github_username].github.io/[your_repository_name]/map1.html)  
- Proportional Symbols Map: [map2.html](https://[your_github_username].github.io/[your_repository_name]/map2.html)

---

## Project Features
- **Dynamic thematic layers:** Choropleth coloring based on COVID-19 rates per 1,000 residents; proportional symbols scaled to case counts.
- **Interactive elements:** Clicking on a county or symbol displays additional information (cases, deaths, population, county name).
- **Legends:** Both maps include legends that explain the color or size scale.
- **Appropriate zoom & projection:** Maps are centered on the U.S. and use the Albers projection.
- **Basemaps:** Selected to provide clear context for the thematic data.

---

## Screenshots
![Choropleth Map Screenshot](./img/choropleth_screenshot.jpg)  
![Proportional Symbols Map Screenshot](./img/proportional_screenshot.jpg)  

---

## Libraries Used
- [Mapbox GL JS](https://docs.mapbox.com/mapbox-gl-js/) – for interactive web maps
- [Turf.js](https://turfjs.org/) – for geospatial calculations (optional)
- [Mapshaper](https://mapshaper.org/) – for simplifying shapefiles and converting to GeoJSON

---

## Data Sources
- **COVID-19 Cases & Deaths (2020):** The New York Times ([NYT GitHub Repository](https://github.com/nytimes/covid-19-data))
- **Population Data (2018):** ACS 5-year estimates, U.S. Census Bureau
- **U.S. County Boundaries:** U.S. Census Bureau
- **Processed GeoJSON:** Prepared specifically for this project by converting shapefiles, cleaning unused attributes, and simplifying geometries.

---

## File Structure

