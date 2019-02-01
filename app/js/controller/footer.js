'use strict';
var app = require('angular').module('todoApp');

app.controller('FooterController', function($scope, VERSION) {
  $scope.version = VERSION;
});
