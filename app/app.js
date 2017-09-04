'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ui.router',
  'myApp.view1',
  'myApp.view2'
]).
config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/view1');

    $stateProvider

        .state('view1', {
            url: '/view1',
            templateUrl: 'view1/view1.html'
        })

        .state('view2', {
            url: '/view2',
            templateUrl: 'view2/view2.html'
        });
});
