var express = require('express');
var app = express();

//We use module.exports to make
// this app object visible to the rest of the program when we call for it using require().
var db = require('./db');
// Adding controllers
// User
var UserController = require('./user/UserController');
app.use('/users', UserController);
module.exports = app;