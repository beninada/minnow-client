define(["underscore", "marionette", "templates"], 
function(_, Marionette, templates) {

	var SearchBarView = Marionette.ItemView.extend({
		template: templates.SearchBar,
		className: "container"
	});

	return SearchBarView;

});