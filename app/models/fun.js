"use strict";

var mongoose  = require('mongoose');

var Schema = mongoose.Schema;

var FunSchema = new Schema({
    status   : String
});

mongoose.model('Fun', FunSchema);