(function() {
  'use strict';
  angular
    .module('chortlePortal')
    .component('newchortle', {
      bindings: {
        newentries: '<',
        formview: '<',
        showform: '<'
        // sendinfo: '<'
      },
      controller: function() {
        const vm = this

        vm.sendinfo = function(data, comment, file, username){
          //console.log(navigator.geolocation)
          navigator.geolocation.getCurrentPosition(function(location){
            const latitude = location.coords.latitude
            const longitude = location.coords.longitude
            if (latitude !== undefined && longitude !== undefined){
              var body = {
                userName : username,
                userComment : comment,
                userImage : file,
                userLongitude : longitude,
                userLatitude : latitude
                }
                console.log(body)
            }
          })
        }

    },
    templateUrl:'container/newchortle/newchortle.html'
  })
}());
