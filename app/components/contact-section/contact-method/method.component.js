'use strict';

angular
  .module('contactMethod')
  .component('contactMethod', {
    templateUrl: 'components/contact-section/contact-method/method.template.html',
    bindings: {
      data: '<'
    }
  });