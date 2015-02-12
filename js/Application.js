define([
				"marionette", "views/NavBarView", 
		    "views/SearchBarView", "views/TilesView", "views/SubscriptionView",
		    "collections/Tiles"
], function(Marionette, NavBarView, SearchBarView, TilesView, SubscriptionView, Tiles) {
	'use strict';
	
	var MinnowApp = new Marionette.Application();
	var tiles = new Tiles();

	var AppLayoutView = Marionette.LayoutView.extend({
	    template: "#app-layout-view-template",
	    regions: {
			navbar: ".navbar",
			searchBar: ".search-bar",
			tilesView : ".tiles-view",
			subscription: ".subscription-view"
	    }
	});

	function getJars() {
		tiles.fetch();
		setTimeout(getJars, 8000);
	}

	/*
	 * Initialized the Minnow application.
	 */
	MinnowApp.addInitializer(function() {
		var appLayoutView = new AppLayoutView();
		$('body').append(appLayoutView.render().el);

		getJars();

		appLayoutView.navbar.show(new NavBarView());
		appLayoutView.searchBar.show(new SearchBarView());
		appLayoutView.tilesView.show(new TilesView({collection: tiles}));
		appLayoutView.subscription.show(new SubscriptionView());
	});

	return MinnowApp;
});

