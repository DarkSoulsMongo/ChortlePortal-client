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
      controller: function($http){
        const vm = this

        vm.sendinfo = function(data, comment, file, username, formview){
          formview.view = true
          navigator.geolocation.getCurrentPosition(function(location){
            const latitude = location.coords.latitude
            const longitude = location.coords.longitude
            const username = 'testy123'
            if (latitude !== undefined && longitude !== undefined){
              var fd = new FormData();
              fd.append('image', file)
              fd.append('userName', username)
              fd.append('userComment', comment)
              fd.append('userLongitude', longitude)
              fd.append('userLatitude', latitude)

              const url = 'https://salty-mountain-21631.herokuapp.com'

              $http.post(url + '/addchortle', fd, {
                transformRequest: angular.identity,
                headers: {
                  'Content-Type': undefined
                }
              })
              .then(function(response) {
                data.push(response.data)
                console.log(response.data);
              })
            }
          })
        }
      },
      templateUrl:'container/newchortle/newchortle.html'
    })
}());
