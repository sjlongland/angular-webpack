'use strict';

require('es5-shim');

require('jquery');
var angular = require('angular');
require('angular-route');

var app = angular.module('todoApp', [ 'ngRoute' ]);

app.constant('VERSION', require('json!../../package.json').version);

require('./service');
require('./controller');

app.config(function($routeProvider) {

  $routeProvider.when('/todos', {
    template: require('../views/todos.html'),
    controller: 'TodoController',
    controllerAs: 'TodoController'
  })
  .when('/imprint', {
    template: require('../views/imprint.html'),
    controller: 'ImprintController',
    controllerAs: 'ImprintController'
  })
  .otherwise({
    redirectTo: '/todos'
  });
});
