var Image = Backbone.Model.extend({
	defaults: {
	    src: ""
	}
});

var Images = Backbone.Collection.extend({
	model: Image,
	getRandomImage: function(path) {
	    path = path || './images/';
            var idx = Math.floor( Math.random() * this.models.length );
            return this.models[ idx ];
	}
});

var EphermeraView = Backbone.View.extend({
	initialize: function(obj) {
            this.collection = obj.collection;
	    this.path = './images';
	}, 

	render: function() {
	    var img = this.collection.getRandomImage(this.path);
            var elem = document.createElement("img");
            elem.src = this.path + "/" + img.get('src');
            elem.style.width = "50%";
            document.getElementById('img-container').appendChild(elem);
	}
});

var images = new Images([
	{src: "image1.jpg"},
	{src: "image2.jpg"},
	{src: "image3.jpg"},
	{src: "image4.jpg"},
	{src: "image5.jpg"},
	{src: "image6.jpg"}
]);

var myView = new EphermeraView({collection: images});
myView.render();
