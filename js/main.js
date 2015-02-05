require.config({
	paths : {
      	backbone : '/bower_components/backbone/backbone',
      	underscore : '/bower_components/underscore/underscore',
      	jquery : '/bower_components/jquery/dist/jquery',
      	marionette : '/bower_components/marionette/lib/core/backbone.marionette',
      	'backbone.babysitter': '/bower_components/backbone.babysitter/lib/backbone.babysitter',
        'backbone.wreqr': '/bower_components/backbone.wreqr/lib/backbone.wreqr',
        'backbone.courier': '/bower_components/backbone.courier/dist/backbone.courier.js',
    		'backbone.subviews': '/bower_components/backbone.subviews/backbone.subviews.js',
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
		babysitter : {
			deps: ['backbone']
		},
		wreqr: {
			deps : ['backbone']
		},
		courier: {
			deps: ['backbone']
		},
		subviews: {
			deps: ['backbone']
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