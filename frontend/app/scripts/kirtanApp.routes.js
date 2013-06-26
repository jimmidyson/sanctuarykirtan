/*global $:false*/
'use strict';

var routesModule = angular.module('kirtanApp.routes', ['kirtanApp.home']);

routesModule.controller('MainCtl', function($scope, $route, $routeParams, $location) {
  $scope.$route       = $route;
  $scope.$location    = $location;
  $scope.$routeParams = $routeParams;

  $scope.$on('$viewContentLoaded', function () {
    $(document).foundation();
  });
});

routesModule.config(function($routeProvider, $locationProvider) {

  $locationProvider.html5Mode(true);

  $routeProvider.when('/', {
    templateUrl:  '/views/main.html',
    controller:   'HomeCtl',
    title:        'Welcome'
  }).when('/watch/:uploadHref', {
    templateUrl:  '/views/watch.html',
    controller:   'WatchCtl',
    title:        'Watch'
  }).otherwise({
    templateUrl:  '404',
    title:        'Not found'
  });

});

routesModule.run(function($rootScope) {
  $rootScope.pageTitle = 'Welcome';

  $rootScope.$on('$routeChangeSuccess', function($event, current) {
    $rootScope.pageTitle = current.title;
  });
});
