/*
 * Filename: Tile.js
 * Organization: Minnow
 * Description: Tile.js contains all the necessary information
 *              correpsonding to Tiles.
 * Date: January 29, 2015
 */

var Subtopic = Backbone.Model.extend({
	defaults: {
		name: null,
		imagePath: "../../images/tile.jpeg"
	}
});

var SubtopicCollection = Backbone.Collection.extend({
	model: Subtopic
});

var Tile = Backbone.Model.extend({
	name: null,
	subTopics: new SubtopicCollection()
});

var TileCollection = Backbone.Collection.extend({
	model: Tile
});

var tileCollection = new TileCollection();

tileCollection.add({name: "ComputerScience", subTopics: new SubtopicCollection([{name: "Graphics"}, {name: "Hardware Design"}, {name: "Artificial Intelligence"}, {name: "Compilers"}, {name: "Algorithms"}, {name: "Databases"}])});