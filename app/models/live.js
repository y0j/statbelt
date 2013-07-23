"use strict";

var mongoose  = require('mongoose');

var Schema = mongoose.Schema;

var LiveSchema = new Schema({
    status   : String
});

mongoose.model('Live', LiveSchema);