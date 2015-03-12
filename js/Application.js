define([
			"backbone", "marionette", "views/NavBarView", 
		    "views/SearchBarView", "views/CategoriesView", "views/TilesView", "views/ScrollNotificationView", 
		    "views/SubscriptionView", "views/CreateSubminnowView", "views/MorselsView", "collections/Categories", 
		    "collections/Morsels", "templates"
], function(Backbone, Marionette, NavBarView, SearchBarView, CategoriesView, TilesView, ScrollNotificationView, 
	SubscriptionView, CreateSubminnowView, MorselsView, Categories, Morsels, templates) {
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
				":catName/subjects": "onSeeAllSubjectsRoute",
				":catName/:jar/morsels": "onMorselsRoute"
			};

			var routerController = {
				onHomeRoute: function() {
					clearTimeout(this.morselsTimeout);
					that.categories = new Categories();
					that.onHomeNavigated(that.categories);
					this.getCategories(that.categories);
				},

				onSeeAllSubjectsRoute: function(categoryName) {
					var category = that.categories.findWhere({cat_name: categoryName});
					that.onSeeAllSubjectsNavigated(category.get("jars"));
				},

				onMorselsRoute: function(catName, jarName) {
					var catModel = that.categories.findWhere({cat_name: catName});
					var jarModel = catModel.get("jars").findWhere({jar_name: jarName});

					clearTimeout(this.categoriesTimeout);
					that.morsels = new Morsels();
					that.morsels.url = "http://localhost:8080/jars/" + encodeURIComponent(jarModel.get("jar_name")) + "/morsels";
					that.onMorselsNavigated(that.morsels, jarName);
					this.getMorsels(that.morsels, jarModel);
				},

				getCategories: function(pCategories) {
					pCategories.fetch();
					this.categoriesTimeout = setTimeout(_.bind(this.getCategories, this), 8000, pCategories);
				},

				getMorsels: function(pMorsels, pJarModel) {
					pMorsels.fetch({
						success: function() {
							pMorsels.unshift(pJarModel);
						}
					});

					this.morselsTimeout = setTimeout(_.bind(this.getMorsels, this), 8000, pMorsels, pJarModel);
				}
			};

			var AppRouter = Marionette.AppRouter.extend({
				appRoutes: routeHandler, 
				controller: routerController
			});

			var router = new AppRouter();
	    },

		onHomeNavigated: function(pCategories) {
			var homeLayoutView = new HomeLayoutView();
			this.appContent.show(homeLayoutView);

			homeLayoutView.navbar.show(new NavBarView());
			homeLayoutView.searchBar.show(new SearchBarView());
			homeLayoutView.categories.show(new CategoriesView({categories: pCategories}));
			homeLayoutView.scrollNotification.show(new ScrollNotificationView());
			homeLayoutView.subscription.show(new SubscriptionView());
			// homeLayoutView.createSubminnow.show(new CreateSubminnowView());
		},

		onSeeAllSubjectsNavigated: function(pJars) {
			var homeLayoutView = new HomeLayoutView();
			this.appContent.show(homeLayoutView);

			homeLayoutView.navbar.show(new NavBarView());
			homeLayoutView.searchBar.show(new SearchBarView());
			homeLayoutView.categories.show(new TilesView({collection: pJars}));
			homeLayoutView.scrollNotification.show(new ScrollNotificationView());
			homeLayoutView.subscription.show(new SubscriptionView());
			// homeLayoutView.createSubminnow.show(new CreateSubminnowView());
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
			categories : ".categories-view",
			subscription: ".subscription-view",
			createSubminnow: ".create-subminnow-view",
			scrollNotification: ".scroll-notification-view"
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