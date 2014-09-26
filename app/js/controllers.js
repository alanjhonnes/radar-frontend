'use strict';

/* Controllers */

angular.module('radarfit.controllers', [])

    .controller('MainCtrl', ['$scope', '$resource', function ($scope, $resource) {
        var Academy = $resource("/resources/academies.json");
        $scope.academies = Academy.query();


        var Trainer = $resource("/resources/trainers.json");
        $scope.trainers = Trainer.query();

        var Class = $resource("/resources/classes.json");
        $scope.classes = Class.query();

        var Extra = $resource("/resources/extras.json");
        $scope.extras = Extra.query();

        $scope.filters = {
            type: 'academy',
            classes: [],
            extras: []
        };


        $scope.filteredAcademies = $scope.academies;
        $scope.filteredTrainers = $scope.trainers;

    }])

    .controller('AcademiasTab', ['$scope', function ($scope) {

    }])
    .controller('MapsCtrl', ['$scope', '$log', function ($scope, $log) {
        $scope.map = {center: {latitude: 40.1451, longitude: -99.6680}, zoom: 4};
        $scope.arr = {person: '234234', age: 7};
        $scope.testModel = {mapa: {nested: 'true'}};
    }])

    .controller('FiltersCtrl', ['$scope', '$log', function ($scope, $log) {


        $scope.groupFilters = [
            {
                name: "Aulas",
                type: "classes",
                options: $scope.classes
            },
            {
                name: "Extras",
                type: "extras",
                options: $scope.extras
            }
        ];

        $scope.activeGroupFilter = null;

        $scope.applyFilters = function () {
            $scope.filteredAcademies = _.filter($scope.academies,
                function (item) {
                    _.forEach($scope.filters.classes, function (classFilter) {
                        if (!_.some(item.classes, function (itemClass) {
                                return classFilter === itemClass;
                            }));
                    });
                    _.forEach($scope.filters.extras, function (extraFilter) {
                        if (!_.some(item.extras, function (itemExtra) {
                                return extraFilter === itemExtra;
                            }));
                    });

                    return false;

                });

            $log.log($scope.filters);
        };

        $scope.addFilter = function (type, name) {
            $log.log(type, name);
            $scope.filters[type].push(name);
            $scope.applyFilters();
        };

        $scope.toggleGroup = function (groupName) {
            if ($scope.activeGroupFilter === groupName) {
                $scope.activeGroupFilter = null;
            }
            else {
                $scope.activeGroupFilter = groupName;
            }
        };


        /*
         $scope.addClassFilter = function(className){
         if(lodash.include($scope.filters.classes, className)){
         $scope.filters.classes.push(className);
         }
         };

         $scope.removeClassFilter = function(className){

         };
         */
    }]);

;
