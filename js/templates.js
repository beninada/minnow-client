define([
			"underscore",
			"text!templates/appLayoutView.html",
			"text!templates/homePageView.html",
			"text!templates/navBarView.html", 
		    "text!templates/searchBarView.html",
		    "text!templates/tileView.html",
		    "text!templates/tilesView.html",
		    "text!templates/subscriptionView.html"
], function(_, AppLayoutView, HomePageView, NavBarView, SearchBarView, TileView, 
	TilesView, SubscriptionView) {
			'use strict';

	    var htmlTemplates = [
	    	{"AppLayoutView": AppLayoutView},
	    	{"HomePageView": HomePageView},
	    	{"NavBarView": NavBarView}, 
	    	{"SearchBarView": SearchBarView},
	    	{"TileView": TileView},
	    	{"TilesView": TilesView},
	    	{"SubscriptionView": SubscriptionView}
	    ];

	    return _.object(_.map(htmlTemplates, function(temp) {
	    		var key = _.keys(temp)[0];
	    		return [key, _.template(temp[key])];
	    }));
});