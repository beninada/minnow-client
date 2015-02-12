define(["marionette"], 
function(Marionette) {


	var ModeratorItemView = Marionette.ItemView.extend({
		template: "#moderator-item-view-template"
	});

	return ModeratorItemView;
});