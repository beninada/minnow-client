define([
        "underscore",
        "marionette",
        "templates"
], function(_, Marionette, templates) {
  'use strict';
  
	var SubscriptionView = Marionette.ItemView.extend({
		template: templates.SubscriptionView
	});

	return SubscriptionView;
});
