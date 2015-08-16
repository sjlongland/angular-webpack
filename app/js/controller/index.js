'use strict';

var app = require('angular').module('todoApp');

app.controller('EditTodoController', require('./edit_todo'));
app.controller('FooterController', require('./footer'));
app.controller('TodoController', require('./todo'));
app.controller('TodoListController', require('./todo_list'));
app.controller('ImprintController', require('./imprint'));
