'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('todoApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should have no todo items initially', function () {
    expect(scope.todos.length).toBe(0);
  });
  
  it('should add todos to the list', function() {
    scope.todo = 'Test 0';
    scope.addToDo();
    expect(scope.todos.length).toBe(1);
  });
  
  it('should add then remove a todo from the list', function () {
    scope.todo = 'Test 0';
    scope.addToDo();
    scope.removeToDo(0);
    expect(scope.todos.length).toBe(0);
  });
});
