angular
  .module('projectCard')
  .component('projectCard', {
    templateUrl: 'components/projects-section/project-card/project.template.html',
    bindings: {
      projectDataFileName: '@'
    },
    controller: [
      'Project',
      function projectCardCtrl(Project) {
        this.$onInit = function initHook() {
          this.project = {};
          Project(this.projectDataFileName).then(project => {
            console.log(project);
            this.project = project;
          });
        };
      }
    ]
  });