var Song = Backbone.Model.extend({
	defaults: {
		artist: null,
		name: null
	}
});

var Album = Backbone.Collection.extend({
	model: Song
});

var song1 = new Song({ name: "How Bizarre", artist: "OMC" });
var song2 = new Song({ name: "Sexual Healing", artist: "Marvin Gaye" });
var song3 = new Song({ name: "Talk It Over In Bed", artist: "OMC" });

var myAlbum = new Album([ song1, song2, song3]);

function alertAllSongs() {
	myAlbum.each(function(song) {
		alert(song.get("name"));
	});
}

alertAllSongs();