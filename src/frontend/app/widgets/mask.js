(function () {
  'use strict';

  angular
    .module('app.widgets')
    .directive('mask', function () {
      return {
        restrict: 'A',
        link: function ($scope, element, attrs, controller) {
          element.mask(attrs.mask);
        }
      };
    });
}());