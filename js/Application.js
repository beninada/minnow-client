define(["marionette", "views/NavigationBarView", 
	    "views/SearchBarView", "views/TilesView",
	    "collections/Rows", "serverResponse"], 
function(Marionette, NavigationBarView, 
	     SearchBarView, TilesView,
	     Rows, serverResponse) {
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
			tilesView : ".tilesView"
	    }
	});

	function getResponse() {
		var repsonse = serverResponse();
		return new Rows(repsonse, {parse: true});
	}

	/*
	 * Initialized the Minnow application.
	 */
	MinnowApp.addInitializer(function() {
		var appLayoutView = new AppLayoutView();
		$('body').append(appLayoutView.render().el);

		var tiles = getResponse();

		appLayoutView.navbar.show(new NavigationBarView());
		appLayoutView.searchBar.show(new SearchBarView());
		appLayoutView.tilesView.show(new TilesView({collection: tiles}));
	});

	return MinnowApp;
});

