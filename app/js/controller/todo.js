'use strict';
var app = require('angular').module('todoApp');

app.controller('TodoController', function($scope, TodoService) {
  $scope.todo = TodoService.getTodos()[0];
});
