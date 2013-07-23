"use strict"

module.exports = function(app) {
	var belts = require('../app/controllers/belts');

	app.get('/', belts.index); 		// new statuses
	app.get('/live', belts.live);
	app.get('/love', belts.love);
	app.get('/fun',  belts.fun);
}