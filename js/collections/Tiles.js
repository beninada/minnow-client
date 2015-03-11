define(["backbone", "models/Tile"], 
function(Backbone, Tile) {

	var Tiles = Backbone.Collection.extend({
		model: Tile
	});

	return Tiles;
});