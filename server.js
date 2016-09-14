// server.js
var express = require('express');
var host = '127.0.0.1';
var port = '8888';

var routes = require('./app/index.js');

var app = express();

app.use(routes);

app.listen(port, host);
console.log("Server started on 127.0.0.1:8080...");