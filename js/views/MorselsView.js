define([
	"marionette", "templates", "models/Morsel"
],
function(Marionette, templates, Morsel) {

	var JarSummaryItemView = Marionette.ItemView.extend({
		template: templates.JarSummaryView,
		className: "jar-summary-item-view",

		ui: {
			$title: ".jar-summary-title",
			$moderator: ".jar-moderator",
			$about: ".jar-summary",
			$aboutContainer: ".jar-about-container"
		},

		onRender: function() {
			this.ui.$title.text(this.model.get("name"));
			this.ui.$moderator.text(this.model.get("creator"));
			this.ui.$about.text(this.model.get("about"));
		}
	});

	var MorselItemView = Marionette.ItemView.extend({
		template: templates.MorselItemView,
		tagName: "a",

		ui: {
			$morsel: ".morsel-item-view",
			$title: ".morsel-title",
			$views: ".morsel-views",
			$age: ".morsel-age"
		},

		onRender: function() {
			var index = (this._index < 10) ? this._index + 1 : 10;

			this.$el.attr("href", this.model.get("link"));
			this.$el.attr("target", "_blank");

			this.ui.$morsel.addClass("rank-" + index);
			this.ui.$title.text(this.model.get("title"));
			this.ui.$views.text("0");
			this.ui.$age.text(this.model.get("age"));
		}
	});

	var MorselsCollectionView = Marionette.CollectionView.extend({
		className: "morsels-collection-view",

		getChildView: function(item) {
			var type = item.get("type");

			if (type === "tile") {
				return JarSummaryItemView;
			} else {
				return MorselItemView;
			}
		}
	});

	var MorselsOptionsView = Marionette.ItemView.extend({
		template: templates.MorselsOptionView,
		className: "morsels-options-view"
	});

	var CreateMorselView = Marionette.ItemView.extend({
		template: templates.CreateMorselView,
	 	className: "create-morsel-view",

	 	initialize: function() {
	 		this.jar = this.options.jar;
	 	},

	 	events: {
	 		"click .createMorsel" : "onCreateMorsel"
	 	},

	 	ui: {
	 		$title: ".title",
	 		$url: ".url",
	 		$author: ".author",
	 		$rating: ".rating"
	 	},

	 	onCreateMorsel: function() {
			var tTitle = this.ui.$title.val();
			var tUrl = this.ui.$url.val();
			var tAuthor = this.ui.$author.val();
			var tRating = this.ui.$rating.val();

			this.ui.$title.val("");
			this.ui.$url.val("");
			this.ui.$author.val("");
			this.ui.$rating.val("");

			var request = {
				"title": tTitle,
				"link": tUrl,
				"author": tAuthor,
				"jar": this.jar,
				"rating": parseInt(tRating)
			};

			var morsel = new Morsel(request);
			morsel.save();
	 	}
	});

	var MorselsView = Marionette.LayoutView.extend({
		template: templates.MorselsView,
		className: "morsels-container",

		initialize: function() {
			this.morsels = this.options.morsels;
		},

		regions: {
			morselsOptionsView: ".morsels-options",
			morselsCollectionView: ".morsels-collection",
			createMorselView: ".create-morsel"
		},

		onRender: function() {
			this.morselsOptionsView.show(new MorselsOptionsView());
			this.morselsCollectionView.show(new MorselsCollectionView({collection: this.morsels}));
			this.createMorselView.show(new CreateMorselView({jar: this.options.jar}));
		}
	});

	return MorselsView;
});