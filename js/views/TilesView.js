define(["marionette", "backbone.subviews", "templates"], 
function(Marionette, Subviews, templates) {

	var TileItemView = Marionette.ItemView.extend({
		template: templates.Tile,
		className: "col-xs-4"
	});

	var TilesCollectionView = Marionette.CollectionView.extend({
		childView: TileItemView
	});

	var Row = Marionette.ItemView.extend({
		template: templates.RowContainer,
		className: "row",

		initialize: function() {
			Subviews.add(this);
		},

		subviewCreators: {
			rowContainerSubview: function() {
				return new TilesCollectionView({collection: this.model.get("collection")});
			}
		}
	});

	var Rows = Marionette.CollectionView.extend({
		childView: Row,
		className: "container-tiles"
	});

	var TilesView = Marionette.ItemView.extend({
		template: templates.TilesContainer,
		className: "container",

		initialize: function() {
			Subviews.add(this);
		},

		subviewCreators: {
			tilesSubview : function() {
				return new Rows({collection: this.options.collection});
			}
		}
	});

	return TilesView;
});