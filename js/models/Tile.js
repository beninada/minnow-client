define([
        "backbone"
], function(Backbone) {
  'use strict';

	var Tile = Backbone.Model.extend({
		defaults: {
			name: "",
			subTiles: null,
			subscribers: 0,
			age: 0
		}	
	});

	return Tile;
});