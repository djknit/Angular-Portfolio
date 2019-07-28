'use strict';

angular
  .module('core.project')
  .factory('Project', [
    '$resource',
    function projectDataFactory($resource) {

      function replaceTechIdsWithTechData(idsArray, techData) {
        idsArray.forEach((techId, index) => {
          idsArray[index] = techData[techId];
          if (!techData[techId]) {
            throw Error(`Invalid tech id: ${techId}`);
          }
        });
      }

      return function getProjectData(fileName) {
        return new Promise((resolve, reject) => {
          $resource('data/tech.json').get(
            techData => $resource(`data/projects/${fileName}`).get(
              projectData => {
                let { tech } = projectData;
                replaceTechIdsWithTechData(tech.front, techData);
                replaceTechIdsWithTechData(tech.back, techData);
                replaceTechIdsWithTechData(tech.apis, techData);
                resolve(projectData);
              }
            )
          )
        });
      }
    }
  ]);