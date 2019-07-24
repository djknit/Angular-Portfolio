'use strict';

angular
  .module('portfolioView')
  .component('portfolioView', {
    templateUrl: '/app/views/portfolio/portfolio.template.html',
    controller: ['ProjectList', function(ProjectList) {
      console.log('aa test aa')
      this.projects = ProjectList.query();
    }]
  });