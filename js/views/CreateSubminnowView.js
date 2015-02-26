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
			$name: ".name",
			$related: ".related",
			$about: ".about"
		},

		onCreateSubminnow: function() {
			var tCreator = this.ui.$creator.val();
			var tName = this.ui.$name.val();
			var tRelated = this.ui.$related.val();
			var tAbout = this.ui.$about.val();

			this.ui.$creator.val("");
			this.ui.$name.val("");
			this.ui.$related.val("");
			this.ui.$about.val("");

			var request = {
				"name": tName,
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