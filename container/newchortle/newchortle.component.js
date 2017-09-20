(function() {
  'use strict';
  angular
    .module('chortlePortal')
    .component('newchortle', {
      bindings: {
        newentries: '<',
        formview: '<',
        showform: '<'
      },
      controller: function() {
        const vm = this

        vm.getposition = function(data, comment){
          //console.log(navigator.geolocation)
          console.log(comment)
          navigator.geolocation.getCurrentPosition(function(location){
            console.log(location.coords.latitude)
            console.log(location.coords.longitude)
          })
        }

    },
    templateUrl:'container/newchortle/newchortle.html'
  })
}());
