define(["backbone", "models/Category"], 
function(Backbone, Category) {

	var Categories = Backbone.Collection.extend({
		model: Category,
		url: "http://localhost:8080/categories"
	});

	return Categories;
});