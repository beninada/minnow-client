define(['marionette'], 
function(Marionette) {

	var SearchBarView = Marionette.ItemView.extend({
		template: "#searchBarViewTemplate"
	});

	return SearchBarView;

});