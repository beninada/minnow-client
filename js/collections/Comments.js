define([
	"backbone", "models/Comment"
], function(Backbone, Comment) {

	var Comments = Backbone.Collection.extend({
		model: Comment
	});
	
	return Comments;
});