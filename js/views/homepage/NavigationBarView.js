define(["marionette"],
function(Marionette) {

	var NavigationBarView = Marionette.ItemView.extend({
		template: "#navBarViewTemplate"
	});

	return NavigationBarView;
});