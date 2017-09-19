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

        }
        // console.log('map.component.js working')
        vm.toggleform = function(form) {
          form.view = !form.view
        }
      },
    templateUrl:'container/map/map.html'
  })
}());
