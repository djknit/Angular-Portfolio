'use strict';

angular
  .module('portfolioApp')
  .config(['$routeProvider',
    function config($routeProvider) {
      $routeProvider
        .when('/', {
          template: '<portfolio-view></portfolio-view>'
        })
        // .when('/readmes/:projectName', {
        //   template: '<readme-view></readme-view>'
        // })
        .otherwise('/');
    }
  ]);