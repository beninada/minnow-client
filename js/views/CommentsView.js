define([
	"marionette", "backbone.subviews", "templates", "collections/Comments", "models/Comment"
],
function(Marionette, Subviews, templates, Comments, Comment) {

	var CommentItemView = Marionette.ItemView.extend({
		template: templates.CommentItemView,

		events: {
			"click .reply-button": "onReplyButtonClicked",
			"click .submit-comment": "onSubmitCommentClicked"
		},

		ui: {
			$commentor: ".commentor",
			$age: ".age",
			$likes: ".comment-likes",
			$reply: ".reply-button",
			$comment: ".user-comment",
			$addPhoto: ".btn-add-photo",
			$submit: ".submit-comment"
		},

		onRender: function() {
			this.ui.$commentor.text(this.model.get("author"));
			this.ui.$age.text(this.model.get("age"));
			this.ui.$likes.text(this.model.get("likes"));
			this.ui.$comment.text(this.model.get("comment"));
		},

		onReplyButtonClicked: function() {
			var elem = this.$el.find("textarea");
			if (elem.hasClass("hide")) {
				elem.removeClass("hide").addClass("show");
			} else {
				elem.removeClass("show").addClass("hide");
			}
		},		

		onSubmitCommentClicked: function() {
			var text = this.$el.find("textarea").val();

			var data = {
				author: this.model.get("author"),
				likes: this.model.get("likes"),
				comment: text
			};

			var commentRequest = new Comment(data);
			
		}
	});

	var CommentsWithRepliesItemView = Marionette.ItemView.extend({
		template: templates.CommentsWithRepliesItemView,
		className: "comment-box",

		initialize: function() {
			Subviews.add(this);
		},

		events: {
			"click .reply-button": "onReplyButtonClicked",
			"click .submit-comment": "onSubmitCommentClicked"
		},

		ui: {
			$commentor: ".commentor",
			$age: ".age",
			$likes: ".comment-likes",
			$reply: ".reply-button",
			$comment: ".user-comment",
			$addPhoto: ".btn-add-photo",
			$submit: ".submit-comment"
		},

		onRender: function() {
			this.ui.$commentor.text(this.model.get("author"));
			this.ui.$age.text(this.model.get("age"));
			this.ui.$likes.text(this.model.get("likes"));
			this.ui.$comment.text(this.model.get("comment"));
		},

		onReplyButtonClicked: function() {
			var elem = this.$el.find("textarea");
			if (elem.hasClass("hide")) {
				elem.removeClass("hide").addClass("show");
				this.ui.$addPhoto.removeClass("hide").addClass("show");
				this.ui.$submit.removeClass("hide").addClass("show");
			} else {
				elem.removeClass("show").addClass("hide");
				this.ui.$addPhoto.removeClass("show").addClass("hide");
				this.ui.$submit.removeClass("show").addClass("hide");
			}
		},

		onSubmitCommentClicked: function() {
			var something = null;
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