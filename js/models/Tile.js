define([
        "backbone"
], function(Backbone) {
  'use strict';

	var Tile = Backbone.Model.extend({
		defaults: {
			type: "tile",
			name: "",
			num_subscribers: 0,
			related: null,
			creator: "",
			about: ""
		},

		urlRoot: "http://localhost:8080/jars"
	});

	return Tile;
});