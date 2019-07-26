'use strict';

angular
  .module('core.contactMethods')
  .factory('ContactMethods', [
    '$resource',
    function contactMethodsFactory($resource) {
      return $resource('data/contact-methods.json').query();
    }
  ]);