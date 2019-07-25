angular
  .module('projectCard')
  .component('projectCard', {
    templateUrl: 'components/projects-section/project-card/project.template.html',
    bindings: {
      projectFileName: '@'
    },
    controller: ['Project', function projectCardCtrl(Project) {
      this.$onInit = function initHook() {
        console.log('_+_' + this.projectFileName);
        // console.log(Project.Project.get())
        Project.get({ fileName: this.projectFileName })
        console.log(Project.get({ fileName: this.projectFileName }))
      };
    }]
  });