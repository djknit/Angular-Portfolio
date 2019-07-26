'use strict';

angular
  .module('contactSection')
  .component('contactSection', {
    templateUrl: 'components/contact-section/contact.template.html',
    controller: [
      'ContactMethods',
      function contactMethodCtrl(ContactMethods) {
        this.contactMethods = ContactMethods;
      }
    ]
  });