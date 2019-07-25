'use strict';

angular
  .module('pageSection')
  .component('pageSection', {
    templateUrl: 'components/page-section/section.template.html',
    bindings: {
      name: '@',
      title: '@',
    },
    transclude: true
  });