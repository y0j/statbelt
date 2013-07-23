"use strict"

var mongoose = require('mongoose');


var Live 	 = mongoose.model('Live');	
var Love 	 = mongoose.model('Love');
var Fun 	 = mongoose.model('Fun');

exports.index = function(req, res){
	res.render('belts/index', {title : 'main page' });
}

exports.live = function(req, res){

    var cmp = Math.random();

    Live
    .find( {rand : { $gte : cmp } })
    .limit(10)
    .sort({rand : 1})
    .exec(function (err, lives) {
        res.render('belts/live', { lives: lives });
    });
}

exports.love = function(req, res){

    var cmp = Math.random();

    Love
    .find( {rand : { $gte : cmp } })
    .limit(10)
    .sort({rand : 1})
    .exec(function (err, loves) {
        res.render('belts/love', { loves: loves });
    });
}

exports.fun = function(req, res){
    
    var cmp = Math.random();

    Fun
    .find( {rand : { $gte : cmp } })
    .limit(10)
    .sort({rand : 1})
    .exec(function (err, funs) {
        res.render('belts/fun', {funs: funs });
    });
}

exports.news = function(req, res){
    
    var cmp = Math.random();

    Fun
    .find( {rand : { $gte : cmp } })
    .limit(10)
    .sort({rand : 1})
    .exec(function (err, funs) {
        res.render('belts/new', {news: news });
    });
}
