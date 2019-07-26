'use strict';

angular
  .module('projectsSection')
  .component('projectsSection', {
    templateUrl: 'components/projects-section/projects.template.html',
    controller: [
      'ProjectList',
      function projectsSectionCtrl(ProjectList) {
        this.projectDataFileNames = ProjectList;
      }
    ]
  });