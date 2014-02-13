'use strict';

/*var fs = require('fs');
var path = require('path');
var browserify = require('browserify');
var shim = require('browserify-shim');
var readdir = require('recursive-readdir');

var b = shim(browserify({
	noParse: [ 
		require.resolve('./bower_components/jquery/jquery.js'),
		require.resolve('./bower_components/handlebars/handlebars.js'),
		require.resolve('./bower_components/ember/ember.js')
	]
}), {
	jquery: {
		path: './bower_components/jquery/jquery',
		exports: '$'
	},
	handlebars: {
		path: './bower_components/handlebars/handlebars',
		exports: 'Handlebars'
	},
	ember: {
		path: './bower_components/ember/ember',
		exports: 'Ember',
		depends: {
			handlebars: 'Handlebars',
			jquery: '$'
		}
	}
});

readdir('app', function(err, files) {
	if (err) { throw err; }
	files.forEach(function(file) {
		var filename = './'+file;
		console.log(filename);
		b.require(require.resolve(filename), {entry: true});
	});

	b.bundle({debug: true}, postBundle);
});

function postBundle(err, src) {
	if (err) {
		console.log(err);
	}
	fs.writeFileSync('out.js', src);
}*/

var browserify = require('browserify');
var shim = require('browserify-shim');
var fs = require('fs');

shim(browserify(), {
	jquery: {
		path: './bower_components/jquery/jquery',
		exports: '$'
	},
	handlebars: {
		path: './bower_components/handlebars/handlebars',
		exports: 'Handlebars'
	},
	ember: {
		path: './bower_components/ember/ember',
		exports: 'Ember',
		depends: {
			handlebars: 'Handlebars',
			jquery: '$'
		}
	}
})
.require(require.resolve('./main.js'), { entry: true })
.bundle(function (err, src) {
	if (err) return console.error(err);

	fs.writeFileSync('out.js', src);
});

