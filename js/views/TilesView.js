define([
				"marionette",
				"backbone.subviews",
				"templates",
				"collections/Tiles"
], function(Marionette, Subviews, templates, Tiles) {
	'use strict';
	
	var TileItemView = Marionette.ItemView.extend({
		template: templates.TileView,
		className: "tile",

		ui: {
			$title: ".tile-title",
			$minnowCount: ".tile-minnow-count",
			$age: ".tile-subminnow-age"
		},

		onRender : function() {
			var index = (this._index < 10) ? this._index + 1 : 10;
			this.$el.addClass("rank-" + index);
			this.ui.$title.text(this.model.get("name"));
			this.ui.$minnowCount.text(this.model.get("subscribers"));
			this.ui.$age.text(this.model.get("age") + " old");
		}
	});

	var TilesCollectionView = Marionette.CollectionView.extend({
		childView: TileItemView,
		className: "container-tiles"
	});

	var TilesView = Marionette.ItemView.extend({
		template: templates.TilesView,
		className: "container",

		initialize: function() {
			Subviews.add(this);
		},

		subviewCreators: {
			TilesSubview : function() {
				return new TilesCollectionView({collection: this.options.collection});
			}
		}
	});

	return TilesView;
});