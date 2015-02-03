/*
 * File name: Application.js
 * Date: February 2, 2015
 * Description: The Application.js files 
 */
var MinnowApp = new Backbone.Marionette.Application();

var AppLayoutView = Backbone.Marionette.LayoutView.extend({
    template: "#appLayoutView",
    className: "applicationLayout",

    regions: {
    	navBar: "#navBar"
    }
});

/*
 * Initialized the Minnow application.
 */
MinnowApp.addInitializer(function() {
	var appLayoutView = new AppLayoutView();
	$('body').append(appLayoutView.render().el);

	homepage.navBar.show(new NavigationBar());
});

MinnowApp.start();

