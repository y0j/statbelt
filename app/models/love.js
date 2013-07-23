"use strict";

var mongoose  = require('mongoose');

var Schema = mongoose.Schema;

var LoveSchema = new Schema({
    status   : String
});

mongoose.model('Love', LoveSchema);