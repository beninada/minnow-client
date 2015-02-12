define(["backbone", "models/Tile"], 
function(Backbone, Tile) {

	var Tiles = Backbone.Collection.extend({
		model: Tile,
		url: "http://localhost:8080/jars"
	});

	return Tiles;
});