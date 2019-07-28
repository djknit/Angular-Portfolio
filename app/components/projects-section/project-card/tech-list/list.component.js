'use strict';

angular
  .module('techList')
  .component('techList', {
    templateUrl: 'components/projects-section/project-card/tech-list/list.template.html',
    bindings: {
      techList: '<',
      listName: '@'
    }
  });