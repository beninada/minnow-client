define([
        "backbone"
], function(Backbone) {
  'use strict';

	var Row = Backbone.Model.extend({
		collection: null
	});

	return Row;
});