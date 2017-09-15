(function() {
  'use strict';
  angular
    .module('chortlePortal')
    .component('application', {

      controller: function() {
        const vm = this
        vm.$onInit = function(){
        console.log('application.component.js working')
      }
    },
    templateUrl:'container/application/application.html'
  })
}());
