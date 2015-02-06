define([
				"marionette", "views/NavBarView", 
		    "views/SearchBarView", "views/TilesView",
		    "collections/Rows", "serverResponse"
], function(Marionette, NavBarView, SearchBarView, TilesView, Rows, serverResponse) {
	'use strict';
	
	var MinnowApp = new Marionette.Application();

	var AppLayoutView = Marionette.LayoutView.extend({
    template: "#app-layout-view-template",
    regions: {
			navbar: ".navbar",
			searchBar: ".search-bar",
			tilesView : ".tiles-view"
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

		appLayoutView.navbar.show(new NavBarView());
		appLayoutView.searchBar.show(new SearchBarView());
		appLayoutView.tilesView.show(new TilesView({collection: tiles}));
	});

	return MinnowApp;
});

