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
      controller: function($http) {
        const vm = this

        vm.sendinfo = function(data, comment, file, username, formview){
          console.log(file)
          //console.log(navigator.geolocation)
          formview.view = true
          navigator.geolocation.getCurrentPosition(function(location){
            const latitude = location.coords.latitude
            const longitude = location.coords.longitude
            const username = 'testy123'
            // const latitude = 39.7577466
            // const longitude = -105.0071732
            if (latitude !== undefined && longitude !== undefined){
              var fd = new FormData();
              // var imgBlob = dataURItoBlob(file);
              fd.append('image', file)
              fd.append('userName', username)
              fd.append('userComment', comment)
              fd.append('userLongitude', longitude)
              fd.append('userLatitude', latitude)

                const url = 'https://salty-mountain-21631.herokuapp.com'
              //  const url = 'http://localhost:3000'
                $http.post(url + '/addchortle', fd, {
                  transformRequest: angular.identity,
                  headers: {
                    'Content-Type': undefined
                  }})
                .then(function(response) {
                  data.push(response.data)
                  console.log(response.data);
                })
            }
            // function dataURItoBlob(dataURI) {
            //   var binary = atob(dataURI.split(',')[1]);
            //   var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
            //   var array = [];
            //   for (var i = 0; i < binary.length; i++) {
            //     array.push(binary.charCodeAt(i));
            //   }
            //   return new Blob([new Uint8Array(array)], {
            //     type: mimeString
            //   });
            // }
          // })
        })}

    },
    templateUrl:'container/newchortle/newchortle.html'
  })
}());
