angular
  .module('projectCard')
  .component('projectCard', {
    templateUrl: 'components/projects-section/project-card/project.template.html',
    bindings: {
      projectDataFileName: '@',
      test: '@'
    },
    controller: ['Project', function projectCardCtrl(Project) {
      this.$onInit = function initHook() {
        console.log('_+_' + this.projectDataFileName);
        console.log(this)

        console.log(this.test)
        Project.get({ fileName: this.projectDataFileName }, b=>console.log(b))
        // console.log(Project.get({ fileName: this.projectDataFileName }))
      };
    }]
  });