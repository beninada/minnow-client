define([
        "backbone",
        "collections/Tiles"
], function(Backbone, Tiles) {
  'use strict';

	var Category = Backbone.Model.extend({
		defaults: {
			cat_name: "",
			num_jars: 0,
			num_resources: 0,
			num_subscribers: 0,
			jars: null
		},

		initialize: function(attrs) {
			this.set({
				name: attrs.name,
				num_subjects: attrs.num_subjects,
				num_subscribers: attrs.num_subscribers,
				jars: new Tiles(attrs.jars)
			});
		}
	});

	return Category;
});