"use strict"

var express = require('express'),
	engine  = require('ejs-locals');

// logging
var fs 		   = require('fs'),
	access_log = fs.createWriteStream('logs/access.log', {flags: 'a'});

module.exports = function (app, config) {
	app.set('showStackError', true);
	app.use(express.compress({
		filter: function(req, res) {
			console.log(res.getHeader('Content-Type'));
			return /json|text|javascript|css/.test(res.getHeader('Content-Type'));
		},
		level : 9
	}));

	// set logger, details on http://www.senchalabs.org/connect/middleware-logger.html
	app.use(express.logger({stream: access_log}));

	app.use(express.static(config.root + '/public'));

	// set views path, template engine and default layout
	app.set('views', config.root + '/app/views');
	app.set('view engine', 'ejs');
	app.engine('ejs', engine);

	app.configure(function () {

		app.use(express.bodyParser());
    	app.use(express.methodOverride());

		app.use(express.favicon());

		// routes should be at the last
		app.use(app.router);
/*
		// assume "not found" in the error msgs is a 404
		app.use(function(err, req, res, next){
      		// treat as 404
      		if (~err.message.indexOf('not found')) return next()

      		// log it
      		console.error(err.stack)

      		// error page
      		res.status(500).render('500', { error: err.stack })
    	})

    	// assume 404 since no middleware responded
    	app.use(function(req, res, next){
      		res.status(404).render('404', { url: req.originalUrl })
   		})
*/
	});
	
}
