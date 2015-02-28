(function() { 
  'use strict';

  angular
    .module('app.teste')
    .controller('Teste', Teste);

  function Teste($scope, $rootScope) {
    $rootScope.title = 'AngularJS - Dojo';

    $scope.validar = function(ehValido) {

      console.log(ehValido);

    };

    $scope.atualiza = ':)';
    $scope.naoAtualiza = ':)';
  }
})();