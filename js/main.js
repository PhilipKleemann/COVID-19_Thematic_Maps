mapboxgl.accessToken =
    'pk.eyJ1IjoicGhpbGlwa2xlZW1hbm4yIiwiYSI6ImNtaWp5c2p2MDE2a3IzZXBtYnBjeDliNGoifQ.o5jwuQrTIuQ983mQAx4BwQ';

let map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/dark-v10',
    zoom: 4,
    minZoom: 3,
    center: [-95, 38] // US-centered
});

// COVID case breaks
const grades = [0, 1000, 5000, 20000],
    colors = ['rgb(254,229,217)', 'rgb(252,146,114)', 'rgb(222,45,38)', 'rgb(165,15,21)'],
    radii = [4, 6, 14, 24];

map.on('load', () => {

    map.addSource('covid', {
        type: 'geojson',
        data: 'assets/covid_counts.geojson'
    });
    

    map.addLayer({
        'id': 'covid-point',
        'type': 'circle',
        'source': 'covid',
        'paint': {
            // Circle size based on COVID cases
            'circle-radius': {
                'property': 'cases',
                'stops': [
                    [grades[0], radii[0]],
                    [grades[1], radii[1]],
                    [grades[2], radii[2]],
                    [grades[3], radii[3]]
                ]
            },
            // Circle color based on COVID cases
            'circle-color': {
                'property': 'cases',
                'stops': [
                    [grades[0], colors[0]],
                    [grades[1], colors[1]],
                    [grades[2], colors[2]],
                    [grades[3], colors[3]]
                ]
            },
            'circle-stroke-color': 'white',
            'circle-stroke-width': 1,
            'circle-opacity': 0.7
        }
    });

    // Popup on click
map.on('click', 'covid-point', (event) => {
        new mapboxgl.Popup()
            .setLngLat(event.features[0].geometry.coordinates)
            .setHTML(`<strong>Cases</strong> ${event.features[0].properties.cases}`)
            .addTo(map);
    });
});

// ---------- Legend ----------
// create legend
const legend = document.getElementById('legend');
//set up legend grades and labels
var labels = ['<strong>Covid-Cases</strong>'],
    vbreak;
//iterate through grades and create a scaled circle and label for each
for (var i = 0; i < grades.length; i++) {
    vbreak = grades[i];
    // you need to manually adjust the radius of each dot on the legend 
    // in order to make sure the legend can be properly referred to the dot on the map.
    dot_radii = 2 * radii[i];
    labels.push(
        '<p class="break"><i class="dot" style="background:' + colors[i] + '; width: ' + dot_radii +
        'px; height: ' +
        dot_radii + 'px; "></i> <span class="dot-label" style="top: ' + dot_radii / 2 + 'px;">' + vbreak +
        '</span></p>');
}
const source =
    '<p style="text-align: right; font-size:10pt">Source: <a href="https://nytimes.com">NY Times</a></p>';
legend.innerHTML = labels.join('') + source;
