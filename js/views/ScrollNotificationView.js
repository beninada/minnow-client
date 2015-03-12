define([
	"marionette", "templates"
], function(Marinette, templates) {
	
	var ScrollNotificationView = Marionette.ItemView.extend({
		template: templates.ScrollNotificationView,
		className: "scroll-notification-item-view"
	});

	return ScrollNotificationView;
});