define([
        "underscore",
        "marionette",
        "models/Tile",
        "templates"
], function(_, Marionette, Tile, templates) {
  'use strict';
  
	var CreateSubminnowView = Marionette.ItemView.extend({
		template: templates.CreateSubminnowView,

		initialize: function() {
			this.tiles = this.options.tiles;
		},

		events: {
			"click .createSubminnow": "onCreateSubminnow"
		},

		ui: {
			$creator: ".creator",
			$jarName: ".jarName",
			$catName: ".catName",
			$related: ".related",
			$about: ".about"
		},

		onCreateSubminnow: function() {
			var tCreator = this.ui.$creator.val();
			var tJarName = this.ui.$jarName.val();
			var tCatName = this.ui.$catName.val();
			var tRelated = this.ui.$related.val();
			var tAbout = this.ui.$about.val();

			this.ui.$creator.val("");
			this.ui.$jarName.val("");
			this.ui.$catName.val("");
			this.ui.$related.val("");
			this.ui.$about.val("");

			var request = {
				"jar_name": tJarName,
				"cat_name": tCatName,
				"num_subscribers": 0,
				"related": tRelated,
				"creator": tCreator,
				"about": tAbout
			};

			var tile = new Tile(request);
			tile.save();
		}
	});

	return CreateSubminnowView;
});