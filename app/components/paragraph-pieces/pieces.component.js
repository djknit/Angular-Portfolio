'use strict';

angular
  .module('paragraphPieces')
  .component('paragraphPieces', {
    templateUrl: 'components/paragraph-pieces/pieces.template.html',
    bindings: {
      pieces: '<'
    }
  });