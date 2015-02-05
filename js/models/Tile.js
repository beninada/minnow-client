define(["backbone"], 
function(Backbone) {

	var Tile = Backbone.Model.extend({
		defaults: {
			name: "",
			subTiles: null
		}	
	});

	return Tile;
});