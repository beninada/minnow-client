define(["backbone"], 
function(Backbone) {

	var Morsel = Backbone.Model.extend({
		defaults: {
			jar: "",
			name: "",
			title: "",
			rating: 0,
			author: "",
			about: ""
		},

		urlRoot: "http://localhost:8080/morsels"
	});

	return Morsel;
});