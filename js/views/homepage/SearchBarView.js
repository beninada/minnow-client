define(['marionette', 'bootstrap'], 
function(Marionette, Bootstrap) {

	var SearchBarView = Marionette.ItemView.extend({
		template: "#searchBarViewTemplate"
	});

	return SearchBarView;

});