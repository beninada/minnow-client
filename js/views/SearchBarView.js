define([
        "underscore",
        "marionette",
        "templates"
], function(_, Marionette, templates) {
  'use strict';
  
	var SearchBarView = Marionette.ItemView.extend({
		template: templates.SearchBarView,
		className: "container"
	});

	return SearchBarView;
});
