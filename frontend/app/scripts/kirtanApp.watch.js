'use strict';

angular.module('kirtanApp.watch', [])
  .controller('WatchCtl', function($scope, $rootScope) {
    $scope.name   = 'WatchCtl';
    $scope.params = $scope.$routeParams;

    $scope.latestUploads = [
      {id: 'dCXENBX38qE', name: 'Hare Krishna', href: 'hare-krishna'},
      {id: 'dCXENBX38qE', name: 'Hare Krishna 2', href: 'hare-krishna-1'},
      {id: 'dCXENBX38qE', name: 'Hare Krishna 3', href: 'hare-krishna-2'}
    ];

    $scope.upload = {id: 'dCXENBX38qE', name: 'Hare Krishna', href: 'hare-krishna'};

    $rootScope.pageTitle = 'Watch ' + $scope.upload.name;
  });
