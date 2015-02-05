define(["underscore",
		"text!templates/NavBar.html", 
	    "text!templates/SearchBar.html"], 
	    function(_, NavBar, SearchBar) {
	    "use strict";

	    var htmlTemplates = {
	    	"NavBar": _.template(NavBar), 
	    	"SearchBar": _.template(SearchBar)
	    };

	    return htmlTemplates;
});