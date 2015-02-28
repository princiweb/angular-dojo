(function () {
  'use strict';

  angular
    .module('app.routes')
    .config(function ($routeProvider) {
    // $locationProvider.html5Mode(true);

      $routeProvider
        .when('/', {
          templateUrl : 'app/teste/teste.html'
        })
        .when('/filmes', {
          templateUrl : 'app/filmes/filmes.html'
        })
        .when('/filmes/:id', {
          templateUrl : 'app/filmes/filme.html'
        });
    });
}());