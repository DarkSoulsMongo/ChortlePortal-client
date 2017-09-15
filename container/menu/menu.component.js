(function() {
  'use strict';
  angular
    .module('chortlePortal')
    .component('menu', {

      controller: function() {
        const vm = this
        console.log('menu working')
    },
    templateUrl:'container/menu/menu.html'
  })
}());
