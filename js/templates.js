define([
			"underscore",
			"text!templates/appLayoutView.html",
			"text!templates/homePageView.html",
			"text!templates/navBarView.html", 
		    "text!templates/searchBarView.html",
		    "text!templates/tileView.html",
		    "text!templates/tilesView.html",
		    "text!templates/subscriptionView.html",
		    "text!templates/createSubminnowView.html",
		    "text!templates/morselsLayoutView.html",
		    "text!templates/morselsView.html",
		    "text!templates/morselsOptionView.html",
		    "text!templates/createMorselView.html",
		    "text!templates/morselItemView.html",
		    "text!templates/jarSummaryView.html",
		    "text!templates/categoryItemView.html",
		    "text!templates/categoriesView.html",
		    "text!templates/scrollNotificationView.html"
], function(_, AppLayoutView, HomePageView, NavBarView, SearchBarView, TileView, 
	TilesView, SubscriptionView, CreateSubminnowView, MorselsLayoutView, MorselsView, 
	MorselsOptionView, CreateMorselView, MorselItemView, JarSummaryView, CategoryView, 
	CategoriesView, ScrollNotificationView) {
			'use strict';

	    var htmlTemplates = [
	    	{"AppLayoutView": AppLayoutView},
	    	{"HomePageView": HomePageView},
	    	{"NavBarView": NavBarView}, 
	    	{"SearchBarView": SearchBarView},
	    	{"TileView": TileView},
	    	{"TilesView": TilesView},
	    	{"SubscriptionView": SubscriptionView},
	    	{"CreateSubminnowView": CreateSubminnowView},
	    	{"MorselsLayoutView": MorselsLayoutView},
	    	{"MorselsView": MorselsView},
	    	{"MorselsOptionView": MorselsOptionView},
	    	{"CreateMorselView": CreateMorselView},
	    	{"MorselItemView": MorselItemView},
	    	{"JarSummaryView": JarSummaryView},
	    	{"CategoriesView": CategoriesView},
	    	{"CategoryView": CategoryView},
	    	{"ScrollNotificationView": ScrollNotificationView}
	    ];

	    return _.object(_.map(htmlTemplates, function(temp) {
	    		var key = _.keys(temp)[0];
	    		return [key, _.template(temp[key])];
	    }));
});