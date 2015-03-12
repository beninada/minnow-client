define([
	"marionette", "backbone.subviews", "templates", "collections/Comments"
],
function(Marionette, Subviews, templates, Comments) {

	var CommentItemView = Marionette.ItemView.extend({
		template: templates.CommentItemView,

		ui: {
			$commentor: ".commentor",
			$age: ".age",
			$likes: ".comment-likes",
			$reply: ".reply-button",
			$comment: ".user-comment"
		},

		onRender: function() {
			this.ui.$commentor.text(this.model.get("author"));
			this.ui.$age.text(this.model.get("age"));
			this.ui.$likes.text(this.model.get("likes"));
			this.ui.$comment.text(this.model.get("comment"));
		}
	});

	var CommentsWithRepliesItemView = Marionette.ItemView.extend({
		template: templates.CommentsWithRepliesItemView,
		className: "comment-box",

		initialize: function() {
			Subviews.add(this);
		},

		ui: {
			$commentor: ".commentor",
			$age: ".age",
			$likes: ".comment-likes",
			$reply: ".reply-button",
			$comment: ".user-comment"
		},

		onRender: function() {
			this.ui.$commentor.text(this.model.get("author"));
			this.ui.$age.text(this.model.get("age"));
			this.ui.$likes.text(this.model.get("likes"));
			this.ui.$comment.text(this.model.get("comment"));
		},

		subviewCreators: {
			commentsSubview : function() {
				var commentsCollection = new Comments(this.model.get("replies"));
				return new CommentsCollectionView({collection: commentsCollection});
			}
		}
	});

	var CommentsCollectionView = Marionette.CollectionView.extend({
		childView: CommentItemView,

		getChildView: function(item) {
			if (item.get("replies").length > 0) {
				return CommentsWithRepliesItemView
			}

			return CommentItemView;
		}		
	});

	var CommentsView = Marionette.ItemView.extend({
		template: templates.CommentsView,
		className: "comments-container-view",

		initialize: function() {
			Subviews.add(this);
		},

		subviewCreators: {
			commentsSubview : function() {
				return new CommentsCollectionView({collection: this.options.collection});
			}
		}
	});

	return CommentsView;
});