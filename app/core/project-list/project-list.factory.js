'use strict';

angular
  .module('core.projectList')
  .factory('ProjectList', [
    '$resource',
    function projectsFactory($resource) {
      return $resource('data/projects/display-order/display-order.json').query();
    }
  ]);