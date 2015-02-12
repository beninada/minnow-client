define(["marionette"], 
function(Marionette) {


	var ResourceItemView = Marionette.ItemView.extend({
		template: "#resource-item-view-template"
	});

	return ResourceItemView;
});