(function() {
  'use strict';

  angular
    .module('app.filmes')
    .factory('dataFilmes', dataFilmes);

  function dataFilmes($http){
    var urlBase = 'http://api.themoviedb.org/3/movie/';
    var filmes = {};

    filmes.populares = function() {
      return $http.get(urlBase + 'popular?api_key=daacda49466e41790becc80ee1658c01&language=br')
    }

    filmes.filme = function(id) {
      return $http.get(urlBase + id + '?api_key=daacda49466e41790becc80ee1658c01&language=pt')
    }

    return filmes;
  }
})();