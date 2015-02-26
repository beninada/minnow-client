define(["backbone", "models/Morsel"],
function(Backbone, Morsel) {

	var Morsels = Backbone.Collection.extend({
		model: Morsel
	});

	return Morsels;
});