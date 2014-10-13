'use strict';


// Declare app level module which depends on filters, and services
angular.module('radarfit', [
    'ui.router',
    'ngResource',
    'ngAnimate',
    'angular-data.DS',
    'pasvaz.bindonce',
    'radarfit.filters',
    'radarfit.services',
    'radarfit.directives',
    'radarfit.controllers'
])
    .run(['$rootScope', '$state', '$stateParams',
        function ($rootScope, $state, $stateParams) {

            // It's very handy to add references to $state and $stateParams to the $rootScope
            // so that you can access them from any scope within your applications.For example,
            // <li ng-class="{ active: $state.includes('contacts.list') }"> will set the <li>
            // to active whenever 'contacts.list' or one of its decendents is active.
            $rootScope.$state = $state;
            $rootScope.$stateParams = $stateParams;
        }
    ])
    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider.state(
            'home',
            {
                url: '/',
                views: {
                    'content': {
                        templateUrl: 'partials/home.html'
                    }
                },
                controller: ["$state", "$stateParams", function ($state, $stateParams) {
                    $state.go('academy');
                }]


            }
        ).state(
            'academy',
            {
                url: '/academy',
                views: {
                    'content': {
                        templateUrl: 'partials/academy.html'
                    },
                    'menu': {
                        templateUrl: 'partials/academy-filters.html'
                    }
                },
                controller: function ($stateParams) {
                    console.log("academy");
                },
                onEnter: function () {
                    console.log("academy");
                }
            }
        ).state(
            'academy.details',
            {
                url: '/:slug',
                views: {
                    'content': {
                        templateUrl: 'partials/academy-details.html'
                    }
                },
                controller: function ($stateParams) {

                }
            }
        ).state(
            'trainer',
            {
                url: '/trainer',
                views: {
                    'content': {
                        templateUrl: 'partials/trainer.html'
                    },
                    'menu': {
                        templateUrl: 'partials/trainer-filters.html'
                    }
                },
                controller: function ($stateParams) {

                }
            }
        ).state(
            'trainer.details',
            {
                url: '/:slug',
                views: {
                    'content': {
                        templateUrl: 'partials/trainer-details.html'
                    }
                },
                controller: function ($stateParams) {

                }
            }
        ).state(
            'user',
            {
                url: '/user',
                abstract: true,
                views: {
                    'content@': {
                        templateUrl: 'partials/user.html'
                    }
                },
                controller: function ($stateParams) {

                }
            }
        ).state(
            'user.login',
            {
                url: '/login',
                views: {
                    'content@': {
                        templateUrl: 'partials/login.html'
                    }
                },
                controller: function ($stateParams) {

                }
            }
        ).state(
            'user.dashboard',
            {
                url: '/dashboard',
                views: {
                    'content': {
                        templateUrl: 'partials/dashboard.html'
                    }
                },
                controller: function ($stateParams) {

                }
            }
        ).state(
            'company',
            {
                url: '/company',
                abstract: true,
                views: {},
                controller: function ($stateParams) {

                }
            }
        ).state(
            'company.about',
            {
                url: '/about',
                views: {
                    'content@': {
                        templateUrl: 'partials/about.html'
                    }
                },
                controller: function ($stateParams) {

                }
            }
        ).state(
            'company.how',
            {
                url: '/how-it-works',
                views: {
                    'content': {
                        templateUrl: 'partials/how-it-works.html'
                    }
                },
                controller: function ($stateParams) {

                }
            }
        )


    }]);