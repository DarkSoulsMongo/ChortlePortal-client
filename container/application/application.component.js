(function() {
  'use strict';
  angular
    .module('chortlePortal')
    .component('application', {

      controller: function() {
        const vm = this
        // console.log(vm)
        vm.$onInit = function(){
          const url = 'https://salty-mountain-21631.herokuapp.com/';
          // $http.get(url).then(function(data) {
          //   vm.data = data.data;
          // })
           vm.formstatus = {
             view: true
           }
          //vm.chortles = data
          // console.log(vm.data)
        // console.log('application.component.js working')
      }
    },
    templateUrl:'container/application/application.html'
  })
}());
