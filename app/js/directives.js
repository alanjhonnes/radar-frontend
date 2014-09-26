'use strict';

/* Directives */


angular.module('radarfit.directives', [])

    .directive('academy', ['', function () {
        return {
            restrict: 'E',
            scope: {},
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
            controller: function ($scope) {

            },
            link: function (scope, element, attrs) {

            }
        }
    }])

    .directive('academyItem', function () {
        return {
            restrict: 'E',
            scope: {
                item: "="
            },
            templateUrl: 'partials/templates/academyItem.html',
            link: function (scope, element, attrs) {

            }
        }
    })

    .directive('heightSwitchable', function () {
        return {
            restrict: 'A',
            transclude: true,
            template: "<div ng-transclude></div>",
            link: function (scope, element, attrs) {
                element.css({
                    margin: "0 !important",
                    padding: "0 !important",
                    overflow: "hidden",
                    "-webkit-transition-property": "height",
                    "-webkit-transition-duration": "0.5s",
                    "-webkit-transition-timing-function": "cubic-bezier(0.425, 0, 0, 1)",
                    "transition-property": "height",
                    "transition-duration": "0.5s",
                    "transition-timing-function": "cubic-bezier(0.425, 0, 0, 1)"
                });
                scope.$watch(attrs.heightSwitchable,

                    function heightSwitchableWatchAction(value) {
                        var originalHeight = element.children().prop('offsetHeight');
                        if (value) {
                            element.css(
                                {
                                    height: originalHeight + 'px'
                                }
                            );
                        } else {
                            element.css('height', '0px');
                        }
                    });
            }
        }
    })


;
