angular
  .module('projectCard')
  .component('projectCard', {
    templateUrl: 'components/projects-section/project-card/project.template.html',
    bindings: {
      projectDataFileName: '@'
    },
    controller: ['Project', function projectCardCtrl(Project) {
      this.$onInit = function initHook() {
        console.log('_+_' + this.projectDataFileName);

        console.log(Project(this.projectDataFileName)
        .then(s=>console.log(s)));
        // console.log(Project.get({ fileName: this.projectDataFileName }))
      };
    }]
  });