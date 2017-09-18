(function() {
  'use strict';
  angular
    .module('chortlePortal')
    .component('map', {
      bindings: {
        chortles:'<',
        defaultvalue : '<',
        showform : '<'
      },
      controller: function() {
        const vm = this
        vm.$onInit = function(){

          // map.on('load', function () {
          //   map.addLayer({
          //     "id": "places",
          //     "type": "symbol",
          //     "source": {
          //         "type": "geojson",
          //         "data": {
          //             "type": "FeatureCollection",
          //             "features": [{
          //                 "type": "Feature",
          //                 "properties": {
          //                   "description": "fucck",
          //                   "icon": "theatre"
          //                 },
          //                 "geometry": {
          //                     "type": "Point",
          //                     "coordinates": [-104.987258, 39.729040]
          //                 }
          //               }, {
          //                 "type": "Feature",
          //                 "properties": {
          //                   "description":"{{chortles[0].comment}}",
          //                   "icon": "theatre"
          //               },
          //               "geometry": {
          //                 "type": "Point",
          //                 "coordinates": [-104.986035, 39.728569]
          //               }
          //             }]
          //           }
          //         },
          //         "layout": {
          //        "icon-image": "{icon}-15",
          //        "icon-allow-overlap": true
          //         }
          //     })
          //     // When a click event occurs on a feature in the places layer, open a popup at the
          //     // location of the feature, with description HTML from its properties.
          //     map.on('click', 'places', function (e) {
          //         new mapboxgl.Popup()
          //             .setLngLat(e.features[0].geometry.coordinates)
          //             .setHTML(e.features[0].properties.description)
          //             .addTo(map);
          //     });
          //     // Change the cursor to a pointer when the mouse is over the places layer.
          //     map.on('mouseenter', 'places', function () {
          //         map.getCanvas().style.cursor = 'pointer';
          //     });
          //     // Change it back to a pointer when it leaves.
          //     map.on('mouseleave', 'places', function () {
          //       map.getCanvas().style.cursor = '';
          //     });
          //   });
        }
        // console.log('map.component.js working')
        vm.toggleform = function(form) {
          form.view = !form.view
        }
      },
    templateUrl:'container/map/map.html'
  })
}());
