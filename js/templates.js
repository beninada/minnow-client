define([
				"underscore",
				"text!templates/navBarView.html", 
		    "text!templates/searchBarView.html",
		    "text!templates/tileView.html",
		    "text!templates/tilesView.html",
		    "text!templates/rowContainer.html"
], function(_, NavBarView, SearchBarView, TileView, TilesView, RowContainer) {
			'use strict';

	    var htmlTemplates = [
	    	{"NavBarView": NavBarView}, 
	    	{"SearchBarView": SearchBarView},
	    	{"TileView": TileView},
	    	{"TilesView": TilesView},
	    	{"RowContainer": RowContainer}
	    ];

	    return _.object(_.map(htmlTemplates, function(temp) {
	    		var key = _.keys(temp)[0];
	    		return [key, _.template(temp[key])];
	    }));
});