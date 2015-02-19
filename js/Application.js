define([
			"backbone", "marionette", "views/NavBarView", 
		    "views/SearchBarView", "views/TilesView", "views/SubscriptionView",
		    "collections/Tiles", "templates"
], function(Backbone, Marionette, NavBarView, SearchBarView, TilesView, SubscriptionView, Tiles, templates) {
	"use strict";
	
	var MinnowApp = new Marionette.Application();

	MinnowApp.addRegions({
		appRegion: "#app-region"
	});

	var AppLayoutView = Marionette.LayoutView.extend({
	    template: templates.AppLayoutView,
	    id: "app-layout-view",

	    initialize : function() {
	    	this.initRouter();
	    },

	    regions: {
	    	appContent: "#app-content"
	    },

	    onRender : function() {
	    	if (!Backbone.History.started) {
	    		Backbone.history.start();
	    	}
	    },

	    initRouter : function() {
	    	var that = this;

	    	var routeHandler = {
				"" : "onHomeRoute",
				"home" : "onHomeRoute"
			};

			var routerController = {
				onHomeRoute: function() {
					var tiles = new Tiles();
					that.onHomeNavigated(tiles);
					this.getJars(tiles);
				},

				getJars : function(pTiles) {
					pTiles.fetch();
					setTimeout(_.bind(this.getJars, this), 8000, pTiles);
				}
			};

			var AppRouter = Marionette.AppRouter.extend({
				appRoutes: routeHandler, 
				controller: routerController
			});

			var router = new AppRouter();
	    },

		onHomeNavigated: function(pTiles) {
			var homeLayoutView = new HomeLayoutView();
			this.appContent.show(homeLayoutView);

			homeLayoutView.navbar.show(new NavBarView());
			homeLayoutView.searchBar.show(new SearchBarView());
			homeLayoutView.tilesView.show(new TilesView({collection: pTiles}));
			homeLayoutView.subscription.show(new SubscriptionView());
		}
	});

	var HomeLayoutView = Marionette.LayoutView.extend({
		id: "home-layout-view",
		template: templates.HomePageView,

	    regions: {
			navbar: ".navbar",
			searchBar: ".search-bar",
			tilesView : ".tiles-view",
			subscription: ".subscription-view"
	    }
	});

	/*
	 * Initialized the Minnow application.
	 */
	MinnowApp.addInitializer(function() {
		var appLayoutView = new AppLayoutView();
		MinnowApp.appRegion.show(appLayoutView);
	});

	return MinnowApp;
});

