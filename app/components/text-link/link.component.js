'use strict';

angular
  .module('textLink')
  .component('textLink', {
    templateUrl: 'components/text-link/link.template.html',
    bindings: {
      url: '@',
      text: '@'
    }
  });