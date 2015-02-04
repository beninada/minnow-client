require.config({
	paths : {
      	backbone : '/bower_components/backbone/backbone',
      	underscore : '/bower_components/underscore/underscore',
      	jquery : '/bower_components/jquery/dist/jquery',
      	"backbone.wreqr" : 'bower_components/backbone.wreqr/lib/backbone.wreqr',
      	"backbone.babysitter" : 'bower_components/backbone.babysitter/lib/backbone.babysitter',
      	marionette : '/bower_components/marionette/lib/core/backbone.marionette'
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
		wreqr: {
			deps : ['backbone']
		},
		babysitter : {
			deps: ['backbone']
		},
		marionette : {
			deps: ['backbone', 'wreqr', 'babysitter'],
			exports : 'Marionette'
		}
	}
});

require(["Application"], function (MinnowApp) {
    // Execute App
    MinnowApp.start();
});