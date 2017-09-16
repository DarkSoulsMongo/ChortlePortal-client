(function() {
  'use strict';
  angular
    .module('chortlePortal')
    .component('newchortle', {
      bindings: {
        newentries: '<',
        formview: '<',
        showform: '<'
      },
      controller: function() {
        const vm = this
        
    },
    templateUrl:'container/newchortle/newchortle.html'
  })
}());
