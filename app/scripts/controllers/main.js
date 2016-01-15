'use strict';

/**
 * @ngdoc function
 * @name todoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the todoApp
 */
angular.module('todoApp')
  .controller('MainCtrl', function ($scope) {
    $scope.todos = [
      'Generate Scaffold',
      'Modify App',
      'Commit',
      'Push'
    ];
  });
