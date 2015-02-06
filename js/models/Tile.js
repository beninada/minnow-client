define([
        "backbone"
], function(Backbone) {
  'use strict';

	var Tile = Backbone.Model.extend({
		defaults: {
			name: "",
			subTiles: null
		}	
	});

	return Tile;
});