var express = require('express');
const cors = require('cors');
const corsOptions = {
    origin: 'http://localhost:8080',
  }
var app = express();

//allow OPTIONS on just one resource
// app.options('/the/resource/you/request', cors())
//allow OPTIONS on all resources
app.options(corsOptions, cors());

//We use module.exports to make
// this app object visible to the rest of the program when we call for it using require().
var db = require('./db');
// Adding controllers
// User
var UserController = require('./Controllers/user/UserController');
app.use('/users', UserController);
// Product
var ProductController = require('./Controllers/product/ProductController');
app.use('/products', ProductController);

module.exports = app;