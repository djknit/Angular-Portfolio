'use strict';

angular
  .module('core.project')
  .factory('Project', [
    '$resource',
    function projectDataFactory($resource) {
      return $resource('data/projects/:fileName');
    }
  ]);