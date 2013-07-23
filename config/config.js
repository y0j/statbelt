"use strict"

module.exports = {
	development : {
		root	: require('path').normalize(__dirname + '/..'),
		db 		: 'mongodb://status:k6RZ4A5gFik15N@localhost/status',
		name	: 'Endless status belt'
	},
	production 	: {
	}
}
