'use strict';

var loginModule = angular.module('kirtanApp.login', []);

loginModule.controller('LoginCtl', function($scope, $http, $rootScope) {
  $scope.user = {};
  $scope.method = 'POST';
  $scope.url = '/login';
  $scope.login = function() {
    $http({
      method:   $scope.method,
      url:      $scope.url,
      data :    'login=' + angular.toJson($scope.user),
      headers : {
        'Content-Type' : 'application/x-www-form-urlencoded'
      }
    }).
    success(function(response) {
      $rootScope.user = angular.fromJson(response);
    }).
    error(function(response) {
      console.log(response);
    });
  };
});

loginModule.controller('LogoutCtl', function($scope, $http, $rootScope, $location) {
  $scope.method = 'POST';
  $scope.url = '/logout';
  $scope.logout = function() {
    $http({
      method:   $scope.method,
      url:      $scope.url
    }).
    success(function() {
      $rootScope.user = null;
      $location.path('/');
    }).
    error(function(response) {
      console.log(response);
    });
  };
});
