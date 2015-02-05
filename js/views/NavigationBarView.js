define(["underscore", "marionette", "templates", "bootstrap"],
function(_, Marionette, templates, Bootstrap) {

	var NavigationBarView = Marionette.ItemView.extend({
		template: templates.NavBar
	});

	return NavigationBarView;
});