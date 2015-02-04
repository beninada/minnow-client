define(["marionette"],
function(Marionette) {

	var NavigationBarView = Marionette.ItemView.extend({
		template: "#navBarTemplate"
	});

	return NavigationBarView;
});