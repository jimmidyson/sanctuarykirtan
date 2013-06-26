'use strict';

angular.module('kirtanApp.home', [])
  .controller('HomeCtl', function($scope) {
    $scope.name   = 'HomeCtl';
    $scope.params = $scope.$routeParams;
  });
