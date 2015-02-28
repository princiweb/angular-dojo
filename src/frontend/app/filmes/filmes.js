(function() { 
  'use strict';

  angular
    .module('app.filmes')
    .controller('Filmes', Filmes);

  function Filmes($scope, $rootScope, dataFilmes){
    $rootScope.title = 'AngularJS - Dojo - Filmes';

    dataFilmes.populares()
      .success(function(result) {
        $scope.filmesPopulares = result.results;
      }).error(function(error) {
        console.log('error: ' + error);
      });
  }

  angular
    .module('app.filmes')
    .controller('Filme', Filme);

  function Filme($scope, $routeParams, $rootScope, dataFilmes){
    dataFilmes.filme($routeParams.id)
      .success(function(result) {
        $scope.filme = result;

        $rootScope.title = 'AngularJS - Dojo - ' + $scope.filme.title;
      }).error(function(error) {
        console.log('error: ' + error);
      });
  }
})();