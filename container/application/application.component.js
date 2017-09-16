(function() {
  'use strict';
  angular
    .module('chortlePortal')
    .component('application', {

      controller: function() {
        const vm = this
        // console.log(vm)
        vm.$onInit = function(){
           vm.data = angular.fromJson(json)
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
