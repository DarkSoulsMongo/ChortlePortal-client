(function() {
  'use strict';
  angular
    .module('chortlePortal')
    .component('currentchortle', {

      controller: function() {
        const vm = this
        console.log('currentchortle working')
    },
    templateUrl:'container/currentchortle/currentchortle.html'
  })
}());
