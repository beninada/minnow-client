
var HomepageView = Backbone.Marionette.LayoutView.extend({
  template: "#homepageTemplate",
  className: "homepage",

	regions: {
		navBar: "#navigationSection",
		searchBar: "#searchBarSection",
		optionsBar: "#optionsSection",
		tileArea: "#tileAreaSection"
	}
});

var NavigationBar = Marionette.ItemView.extend({
	template: "#navigationBarTemplate",
	className: "navigationBarContents"
});

var SearchBar = Marionette.ItemView.extend({
	template: "#searchBarTemplate",
	className: "row"
});

var OptionsBar = Marionette.ItemView.extend({
	template: "#optionsSidebarTemplate",
	className: "optionsBar"
});

var TilesCollectionView = Marionette.ItemView.extend({
	template: "#tileCollectionAreaTemplate",
	className: "tileSection"
});

var homepage = new HomepageView();

$(function() {
	$('body').append(homepage.render().el);
	homepage.navBar.show(new NavigationBar());
	homepage.searchBar.show(new SearchBar());
	homepage.optionsBar.show(new OptionsBar());
	homepage.tileArea.show(new TilesCollectionView());
});