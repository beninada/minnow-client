define([
	"marionette",
	"backbone.subviews",
	"views/TilesView",
	"templates",
	"collections/Tiles"
], function(Marionette, Subviews, TilesView, templates, Tiles) {
	'use strict';


	var CategoriesItemView = Marionette.ItemView.extend({
		template: templates.CategoryView,
		className: "categories-item-view",

		initialize: function() {
			Subviews.add(this);
		},

		ui: {
			$label: ".cat-label",
			$subjects: ".cat-subjects",
			$resources: ".cat-resources",
			$subscribers: ".cat-subscribers",
			$seeAll: ".see-all-subjects"
		},

		onRender: function() {
			this.ui.$label.text(this.model.get("cat_name"));
			this.ui.$subjects.text(this.model.get("num_jars") + " subjects");
			this.ui.$resources.text(this.model.get("num_resources") + " resources");
			this.ui.$subscribers.text(this.model.get("num_subscribers") + " subscribers");
			this.ui.$seeAll.text("See all subjects related to " + this.model.get("cat_name"));
			this.ui.$seeAll.attr("href", "#" + this.model.get("cat_name") + "/subjects");
		},

		subviewCreators: {
			tilesSubview: function() {
				return new TilesView({
					collection: this.model.get("jars"),
					tilesFilter: 6
				});
			}
		}
	});

	var CategoriesCollectionView = Marionette.CollectionView.extend({
		childView: CategoriesItemView
	});

	var CategoriesView = Marionette.ItemView.extend({
		template: templates.CategoriesView,
		className: "container",

		initialize: function() {
			Subviews.add(this);
		},

		subviewCreators: {
			categoriesSubview : function() {
				return new CategoriesCollectionView({collection: this.options.categories});
			}
		}
	});

	return CategoriesView;
});