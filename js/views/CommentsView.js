define([
	"marionette", "templates"
],
function(Marionette, templates) {
	

	var CommentItemView = Marionette.ItemView.extend({

	});

	var CommentsCollectionView = Marionette.CollectionView.extend({
		childView: CommentItemView
	});

	var CommentsView = Marionette.ItemView.extend({
		template: templates.CommentsView,
		className: "comments-container-view",

		initialize: function() {
			
		}
	});

	return CommentsView;
});