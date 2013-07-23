"use strict"

var express = require('express'),
    fs      = require('fs');

var env = process.env.NODE_ENV || 'development',
          config    = require('./config/config')[env],
          mongoose  = require('mongoose');

mongoose.connect(config.db);

var models_path = __dirname + '/app/models'
fs.readdirSync(models_path).forEach(function(file) {
  require(models_path+'/'+file);
});

// express settings
var app = express();
require('./config/express')(app, config);

require('./config/routes')(app);

var port = process.env.PORT || 8888
app.listen(port, 'localhost');
console.log('Start server on: http://localhost:'+port); 
