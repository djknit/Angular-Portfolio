'use strict';

angular
  .module('portfolioView')
  .component('portfolioView', {
    templateUrl: '/app/views/portfolio/portfolio.template.html',
    controller: ['ProjectList', function(ProjectList) {
      // this.projects = ProjectList.query();
    }]
  });