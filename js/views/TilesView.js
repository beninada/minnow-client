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
			var jarName = this.model.get("jar_name");
			var catName = this.model.get("cat_name");

			this.$el.attr("href", "#" + catName + "/" + jarName + "/morsels");
			this.ui.$tile.addClass("rank-" + index);
			this.ui.$title.text(jarName);
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
				var tilesJSON = this.options.collection.toJSON();
				var tiles = new Tiles(tilesJSON.slice(0, this.options.tilesFilter));
				return new TilesCollectionView({collection: tiles});
			}
		}
	});

	return TilesView;
});