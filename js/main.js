require.config({
	paths : {
  	backbone : '/bower_components/backbone/backbone',
  	underscore : '/bower_components/underscore/underscore',
  	jquery : '/bower_components/jquery/dist/jquery',
  	marionette : '/bower_components/marionette/lib/core/backbone.marionette',
  	'backbone.babysitter': '/bower_components/backbone.babysitter/lib/backbone.babysitter',
    'backbone.wreqr': '/bower_components/backbone.wreqr/lib/backbone.wreqr',
    'backbone.courier': '/bower_components/backbone.courier/dist/backbone.courier',
		'backbone.subviews': '/bower_components/backbone.subviews/backbone.subviews',
		text: '/js/text',
    bootstrap: '/bower_components/bootstrap/dist/js/bootstrap'
  },

	shim : {
		jquery : {
			exports : 'jQuery'
		},
		bootstrap : { 
			deps :['jquery'] 
		},
		underscore : {
			exports : '_'
		},
		backbone : {
			deps : ['jquery', 'underscore'],
			exports : 'Backbone'
		},
		"backbone.babysitter" : {
			deps: ['backbone'],
			exports: "Babysitter"
		},
		"backbone.wreqr": {
			deps : ['backbone'],
			exports: "Wreqr"
		},
		"backbone.courier": {
			deps: ['backbone'],
			exports: "Courier"
		},
		"backbone.subviews": {
			deps: ['backbone'],
			exports: "Subviews"
		},
		marionette : {
			deps: ['backbone'],
			exports : 'Marionette'
		}
	}
});

require(["Application"], function (MinnowApp) {
    // Execute App
    MinnowApp.start();
});