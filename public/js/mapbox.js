/* eslint-disable */

export const displayMap = locations => {
  mapboxgl.accessToken =
    'pk.eyJ1Ijoiam9uZzMxNCIsImEiOiJjazhnaDE4aXgwMWk1M2dxa3RhN2dhMGp5In0.a9mJZhKj3pkDceES2h_s2g';

  var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/jong314/ck8gh9s2708e11irzs8smd3v0',
    scrollZoom: false
    //   center: [-118.6919205, 34.0201613],
    //   zoom: 10,
    //   interactive: false
  });

  const bounds = new mapboxgl.LngLatBounds();

  locations.forEach(loc => {
    // Add marker
    const el = document.createElement('div');
    el.className = 'marker';

    new mapboxgl.Marker({
      element: el,
      anchor: 'bottom'
    })
      .setLngLat(loc.coordinates)
      .addTo(map);

    // Add popup
    new mapboxgl.Popup({
      offset: 30
    })
      .setLngLat(loc.coordinates)
      .setHTML(`<p>Day ${loc.day}: ${loc.description}</p>`)
      .addTo(map);

    // Extend map bounds to include current location
    bounds.extend(loc.coordinates);
  });

  map.fitBounds(bounds, {
    padding: {
      top: 200,
      bottom: 150,
      left: 100,
      right: 100
    }
  });
};
