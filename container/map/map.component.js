(function() {
  'use strict';
  angular
    .module('chortlePortal')
    .component('map', {

      controller: function() {
        const vm = this
        console.log('map.component.js working')
      },
    templateUrl:'container/map/map.html'
  })
}());
