define([
        "underscore",
        "marionette",
        "templates",
        "bootstrap"
], function(_, Marionette, templates, Bootstrap) {
  'use strict';
  
	var NavBarView = Marionette.ItemView.extend({
		template: templates.NavBarView,
		className: "container"
	});

	return NavBarView;
});
