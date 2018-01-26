(function() {
  'use strict';
  angular
    .module('chortlePortal')
    .component('application', {
      controller: function($http) {
        const vm = this

        vm.$onInit = function(){
          const url = 'https://salty-mountain-21631.herokuapp.com'

          $http.get(url).then(function(data){
            vm.data = data.data
          })
          vm.formstatus = {
            view: true
          }
          vm.postinfo = {
            userName : 'username',
            userComment : 'comment',
            userImage : 'file',
            userLongitude : 'longitude',
            userLatitude : 'latitude'
          }
        }
      },
      templateUrl:'container/application/application.html'
    })
}());
