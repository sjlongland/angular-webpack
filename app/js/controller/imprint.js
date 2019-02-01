'use strict';
var app = require('angular').module('todoApp');

app.controller('ImprintController', function($scope, ImprintService) {
	$scope.text = ImprintService.getText();
});
