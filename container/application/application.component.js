(function() {
  'use strict';
  angular
    .module('chortlePortal')
    .component('application', {

      controller: function($http) {
        const vm = this
        // console.log(vm)
        vm.$onInit = function(){
          const url = 'https://salty-mountain-21631.herokuapp.com/'
          //console.log(url)
          $http.get(url).then(function(data) {
            vm.data = data.data
            console.log(data)
          })
           vm.formstatus = {
             view: true
           }
        //   vm.chortles = data
        //   console.log(vm.data)
        // console.log('application.component.js working')
      }
    },
    templateUrl:'container/application/application.html'
  })
}());
