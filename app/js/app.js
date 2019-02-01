'use strict';

require('es5-shim');

require('jquery');
var angular = require('angular');
require('angular-route');

var app = angular.module('todoApp', [ 'ngRoute' ]);

app.constant('VERSION', require('../../package.json').version);

require('./service');
require('./controller');

/*
 * This feels odd to 'include' CSS into JavaScript, but it tells css-loader
 * that these files are important to this piece of JavaScript code.
 */
require('../css/app.css');
require('../css/normalize.css');
require('../css/unsemantic-grid-responsive.css');

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
