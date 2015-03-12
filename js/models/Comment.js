define(["backbone"], 
function(Backbone) {

	var Comment = Backbone.Model.extend({
		defaults: {
			id: "",
			author: "",
			comment: "",
			replies: []
		}
	});

	return Comment;
});