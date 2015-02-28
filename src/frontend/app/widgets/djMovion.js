(function () {
  'use strict';

  angular
    .module('app.widgets')
    .directive('djMovion', function () {
      return {
        restrict: 'E',
        templateUrl: 'app/widgets/dj-movion.html'
      };
    });
}());