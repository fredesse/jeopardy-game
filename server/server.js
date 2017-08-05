var express = require('express');
var db = require('./db');
var controller = require('./controllers');
var path = require('path');
var app = express();
//var homepage = require('../client/index.html');

app.get('/questions', function(req, res) {
  controller.movies.get(req, res);
});

app.use(express.static('../client'));

var port = 8080;

app.listen(port, function() {
  console.log('Jeopardify is listening on port ' + port);
});