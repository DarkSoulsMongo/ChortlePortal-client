(function() {
  'use strict';
  angular
    .module('chortlePortal')
    .component('map',{
      bindings: {
        chortles:'<',
        defaultvalue : '<',
        showform : '<',
        senddata : '<'
      },
      controller: function() {
        const vm = this

        vm.toggleform = function(form){
          form.view = !form.view
        }
      },
      templateUrl:'container/map/map.html'
    })
}());
