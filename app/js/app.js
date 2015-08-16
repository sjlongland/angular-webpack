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
    templateUrl: 'views/todos.html',
    controller: 'TodoCtrl'
  })
  .when('/imprint', {
    templateUrl: 'views/imprint.html',
    controller: 'ImprintCtrl'
  })
  .otherwise({
    redirectTo: '/todos'
  });
});
