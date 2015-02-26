define([
			"backbone", "marionette", "views/NavBarView", 
		    "views/SearchBarView", "views/TilesView", "views/SubscriptionView", "views/CreateSubminnowView",
		    "views/MorselsView", "collections/Tiles", "collections/Morsels", "templates"
], function(Backbone, Marionette, NavBarView, SearchBarView, TilesView, SubscriptionView, 
	CreateSubminnowView, MorselsView, Tiles, Morsels, templates) {
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
				"": "onHomeRoute",
				"home": "onHomeRoute",
				":jar/morsels": "onMorselsRoute"
			};

			var routerController = {
				onHomeRoute: function() {
					clearTimeout(this.morselsTimeout);
					that.tiles = new Tiles();
					that.onHomeNavigated(that.tiles);
					this.getJars(that.tiles);
				},

				onMorselsRoute: function(jarName) {
					var jarModel = that.tiles.findWhere({name: jarName});

					clearTimeout(this.jarsTimeout);
					that.morsels = new Morsels();
					that.morsels.url = "http://localhost:8080/jars/" + encodeURIComponent(jarModel.get("name")) + "/morsels";
					that.onMorselsNavigated(that.morsels, jarModel.get("name"));
					this.getMorsels(that.morsels, jarModel);
				},

				getJars: function(pTiles) {
					pTiles.fetch();
					//this.jarsTimeout = setTimeout(_.bind(this.getJars, this), 8000, pTiles);
				},

				getMorsels: function(pMorsels, pJarModel) {
					pMorsels.fetch({
						success: function() {
							pMorsels.unshift(pJarModel);
						}
					});

					//this.morselsTimeout = setTimeout(_.bind(this.getMorsels, this), 8000, pMorsels, pJarModel);
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
			homeLayoutView.createSubminnow.show(new CreateSubminnowView({tiles: pTiles}));
		},

		onMorselsNavigated: function(pMorsels, pJarName) {
			var morselsLayoutView = new MorselsLayoutView();
			this.appContent.show(morselsLayoutView);

			morselsLayoutView.navbar.show(new NavBarView());
			morselsLayoutView.searchBar.show(new SearchBarView());
			morselsLayoutView.morselsView.show(new MorselsView({morsels: pMorsels, jar: pJarName}));
			morselsLayoutView.createSubminnow.show(new CreateSubminnowView());
		}
	});

	var HomeLayoutView = Marionette.LayoutView.extend({
		id: "home-layout-view",
		template: templates.HomePageView,

	    regions: {
			navbar: ".navbar",
			searchBar: ".search-bar",
			tilesView : ".tiles-view",
			subscription: ".subscription-view",
			createSubminnow: ".create-subminnow-view"
	    }
	});

	var MorselsLayoutView = Marionette.LayoutView.extend({
		id: "morsels-layout-view",
		template: templates.MorselsLayoutView,

	    regions: {
			navbar: ".navbar",
			searchBar: ".search-bar",
			morselsView: ".morsels-view",
			createSubminnow: ".create-subminnow-view"
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