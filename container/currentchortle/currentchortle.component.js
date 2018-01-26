(function() {
  'use strict';
  angular
    .module('chortlePortal')
    .component('currentchortle', {
      bindings: {
        entries: '<'
      },
      controller: function() {
        const vm = this
      },
    templateUrl:'container/currentchortle/currentchortle.html'
    })
}());
