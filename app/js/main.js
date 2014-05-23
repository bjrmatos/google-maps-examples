/* global google */

(function() {
  'use strict';

  function initialize() {
    var map, mapOptions;

    // options for map
    mapOptions = {
      center: new google.maps.LatLng(-34.397, 150.644),
      zoom: 8,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    // create the map with a reference of a DOM element and the options for the map
    map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
  }

  initialize();
})();
