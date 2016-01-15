'use strict';

/**
 * @ngdoc function
 * @name todoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the todoApp
 */
angular.module('todoApp')
  .controller('MainCtrl', function ($scope, localStorageService) {
    var toDosInStore = localStorageService.get('todos');
    
    $scope.todos = toDosInStore || [];
    $scope.$watch('todos', function () {
      localStorageService.set('todos', $scope.todos);
    }, true);
    
    $scope.addToDo = function() {
      $scope.todos.push($scope.todo);
      $scope.todo = '';
    };
    
    $scope.removeToDo = function(index) {
      $scope.todos.splice(index,1);
    };
  });
