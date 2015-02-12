define([
        "backbone"
], function(Backbone) {
  'use strict';

	var Tile = Backbone.Model.extend({
		defaults: {
			name: "",
			subTiles: null,
			num_subscribers: 0,
			age: 0
		}	
	});

	return Tile;
});