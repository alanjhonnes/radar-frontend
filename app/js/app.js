'use strict';


// Declare app level module which depends on filters, and services
angular.module('rafarfit', [
    'ui.router',
    'google-maps',
    'radarfit.filters',
    'radarfit.services',
    'radarfit.directives',
    'radarfit.controllers'
]).
    config(['$stateProvider', function ($stateProvider) {
        $stateProvider.state(
            'academy',
            {
                url: '/',
                views: {}
            }
        )
    }]);
