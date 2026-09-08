
mapboxgl.accessToken = mapToken;

const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/standard', // Use the standard style for the map
    zoom: 9, // initial zoom level, 0 is the world view, higher values zoom in
    center: listing.geometry.coordinates // center the map on this longitude and latitude
});

const marker = new mapboxgl.Marker({color: 'red'}) // create a new marker with a red color
    .setLngLat(listing.geometry.coordinates) // set the marker's position to the same coordinates as the map center
    .setPopup(new mapboxgl.Popup({offset: 25}).setHTML(
        `<h4>${listing.title}</h4><p>Exact Location will be provided after booking</p>`))
    .addTo(map); // add the marker to the map