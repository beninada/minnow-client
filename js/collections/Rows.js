define(["underscore", "backbone",
	    "models/Row", "collections/Tiles"], 
function(_, Backbone, Row, Tiles) {

	var Rows = Backbone.Collection.extend({
		model: Row,
		parse: function(response) {
			var iterations = Math.ceil(response.length / 3.0);
			var tileRows = [];

			for (i = 0; i < iterations; i++) {
				tileRows.push({collection: new Tiles(response.splice(0, 3))});
			}

			return tileRows;
		}
	});

	return Rows;
});