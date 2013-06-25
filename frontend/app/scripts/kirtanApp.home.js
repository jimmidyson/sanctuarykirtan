'use strict';

angular.module('kirtanApp.home', [])
  .controller('HomeCtl', function($scope) {
    $scope.name   = 'HomeCtl';
    $scope.params = $scope.$routeParams;

    $scope.latestUploads = [
      {id: 'dCXENBX38qE', name: 'Hare Krishna', href: 'hare-krishna'},
      {id: 'dCXENBX38qE', name: 'Hare Krishna 2', href: 'hare-krishna-1'},
      {id: 'dCXENBX38qE', name: 'Hare Krishna 3', href: 'hare-krishna-2'}
    ];
  });
