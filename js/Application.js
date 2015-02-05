define(['marionette', 'views/NavigationBarView', 
	    'views/SearchBarView', 'views/TilesCollectionView'], 
function(Marionette, NavigationBarView, 
	     SearchBarView, TilesCollectionView) {
	/*
	 * File name: Application.js
	 * Date: February 2, 2015
	 * Description: The Application.js files 
	 */
	var MinnowApp = new Marionette.Application();

	var AppLayoutView = Marionette.LayoutView.extend({
	    template: "#appLayoutViewTemplate",
	    className: "applicationLayout",

	    regions: {
			navbar: ".navbar",
			searchBar: ".searchBar",
			tilesCollection : ".tilesCollection"
	    }
	});

	/*
	 * Initialized the Minnow application.
	 */
	MinnowApp.addInitializer(function() {
		var appLayoutView = new AppLayoutView();
		$('body').append(appLayoutView.render().el);

		appLayoutView.navbar.show(new NavigationBarView());
		appLayoutView.searchBar.show(new SearchBarView());
		appLayoutView.tilesCollection.show(new TilesCollectionView());
	});

	return MinnowApp;
});

