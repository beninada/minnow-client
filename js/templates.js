define(["underscore",
		"text!templates/navbar.html", 
	    "text!templates/searchbar.html",
	    "text!templates/tile.html",
	    "text!templates/tilesview.html",
	    "text!templates/row-container.html"], 
	    function(_, NavBar, SearchBar, Tile, TilesContainer,
	    	RowContainer) {
	    "use strict";

	    var htmlTemplates = [
	    	{"NavBar": NavBar}, 
	    	{"SearchBar": SearchBar},
	    	{"Tile": Tile},
	    	{"TilesContainer": TilesContainer},
	    	{"RowContainer": RowContainer}
	    ];

	    return _.object(_.map(htmlTemplates, function(temp) {
	    		var key = _.keys(temp)[0];
	    		return [key, _.template(temp[key])];
	    }));
});