define(['marionette'], function(Marionette) {
	/*
	 * File name: Application.js
	 * Date: February 2, 2015
	 * Description: The Application.js files 
	 */
	var MinnowApp = new Marionette.Application();

	MinnowApp.on("initialize:after", function(){
      	alert("Application has started!");
    });

	return MinnowApp;
});

