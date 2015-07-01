"use strict";

var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(express.static(__dirname + '/build'));


app.listen(process.env.PORT || 8000);


module.exports = app;
