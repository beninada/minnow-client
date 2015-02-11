define([
				"marionette", "views/NavBarView", 
		    "views/SearchBarView", "views/TilesView", "views/SubscriptionView",
		    "collections/Tiles", "serverResponse"
], function(Marionette, NavBarView, SearchBarView, TilesView, SubscriptionView, Tiles, serverResponse) {
	'use strict';
	
	var MinnowApp = new Marionette.Application();

	var AppLayoutView = Marionette.LayoutView.extend({
    template: "#app-layout-view-template",
    regions: {
		navbar: ".navbar",
		searchBar: ".search-bar",
		tilesView : ".tiles-view",
		subscription: ".subscription-view"
    }
	});

	function getResponse() {
		var response = serverResponse();
		return new Tiles(response);
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
		appLayoutView.subscription.show(new SubscriptionView());
	});

	return MinnowApp;
});

