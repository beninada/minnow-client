define(['marionette'], 
function(Marionette) {

	var TilesCollectionView = Marionette.ItemView.extend({
		template: "#tilesContainerTemplate"
	});

	return TilesCollectionView;
});