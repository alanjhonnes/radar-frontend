'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('radarfit.services', ['angular-data.DS'])
    .factory('User', function (DS) {
        return DS.defineResource({
            name: 'user'
        });
    })
    .factory('Academy', function (DS) {
        return DS.defineResource({
            name: 'academy'
        });
    })
    .factory('Trainer', function (DS) {
        return DS.defineResource({
            name: 'academy'
        });
    })
