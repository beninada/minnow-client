define([
				"marionette",
				"backbone.subviews",
				"templates",
				"collections/Tiles"
], function(Marionette, Subviews, templates, Tiles) {
	'use strict';
	
	var TileItemView = Marionette.ItemView.extend({
		template: templates.TileView,
		tagName: "a",

		ui: {
			$tile: ".tile",
			$title: ".tile-title",
			$minnowCount: ".tile-minnow-count",
			$age: ".tile-subminnow-age"
		},

		onRender : function() {
			var index = (this._index < 10) ? this._index + 1 : 10;
			var name = this.model.get("name");

			this.$el.attr("href", "#" + name + "/morsels");
			this.ui.$tile.addClass("rank-" + index);
			this.ui.$title.text(name);
			this.ui.$minnowCount.text(this.model.get("num_subscribers"));
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