'use strict';


// Declare app level module which depends on filters, and services
angular.module('radarfit', [
    'ui.router',

    'ngResource',
    'ngAnimate',
    'pasvaz.bindonce',
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
