define(["underscore", "marionette", "templates"],
function(_, Marionette, templates) {

	var NavigationBarView = Marionette.ItemView.extend({
		template: templates.NavBar,
		className: "container"
	});

	return NavigationBarView;
});