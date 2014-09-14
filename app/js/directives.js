'use strict';

/* Directives */


angular.module('radarfit.directives', [])

    .directive('academy', ['', function () {
        return {
            restrict: '',
            require: '',
            scope: {},
            template: '',
            transclude: true,
            controller: ['$scope', function ($scope) {

            }],
            link: function (scope, element, attrs) {

            }
        }


    }])

    .directive('personalTrainer', ['', function () {
        return {
            restrict: "E",
            require: "",
            controller: function ($scope) {

            },
            link: function (scope, element, attrs) {

            }
        }
    }])


;
