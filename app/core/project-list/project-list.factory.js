'use strict';

angular
  .module('core.projectList')
  .factory('ProjectList', [
    '$resource',
    function projectsDisplayOrderListFactory($resource) {
      return $resource('data/projects/display-order/display-order.json');
    }
  ]);