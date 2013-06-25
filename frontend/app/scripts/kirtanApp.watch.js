'use strict';

angular.module('kirtanApp.watch', [])
  .controller('WatchCtl', function($scope, $rootScope) {
    $scope.name   = 'WatchCtl';
    $scope.params = $scope.$routeParams;

    $scope.upload = {id: 'dCXENBX38qE', name: 'Hare Krishna', href: 'hare-krishna'};

    $rootScope.pageTitle = 'Watch ' + $scope.upload.name;
  });
