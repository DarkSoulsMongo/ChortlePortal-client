(function() {
  'use strict';
  angular
    .module('chortlePortal')
    .component('newchortle', {

      controller: function() {
        const vm = this
        console.log('newchortle.component.js working')
    },
    templateUrl:'container/newchortle/newchortle.html'
  })
}());
