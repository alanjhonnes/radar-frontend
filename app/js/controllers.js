'use strict';

/* Controllers */

angular.module('radarfit.controllers', [])
    .controller('AcademiasTab', ['$scope', function ($scope) {

    }])
    .controller('MapsCtrl', ['$scope', '$log', function ($scope, $log) {
        $scope.map = {center: {latitude: 40.1451, longitude: -99.6680}, zoom: 4};
        $scope.arr = {person: '234234', age: 7};
        $scope.testModel = {mapa: {nested: 'true'}};
    }])

;
