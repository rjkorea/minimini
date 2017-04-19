var application_root = __dirname,
	express = require('express'),
	path = require('path'),
	mongoose = require('mongoose');
var firebase = require("firebase");
var app = express();


	app.use(express.bodyParser());
	app.use(express.methodOverride());
	app.use(app.router);
	app.use(express.static(path.join(application_root, 'recipes')));
	app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));


var config = {
  apiKey: "AIzaSyCsNzV3a_cD4IYDlB4DhpKMkCPfpmg63_A",
  authDomain: "coocoocook.firebaseapp.com",
  databaseURL: "https://coocoocook-aabd8.firebaseio.com/",
  storageBucket: "gs://coocoocook-aabd8.appspot.com",
};

firebase.initializeApp(config);
// var database = firebase.database();
// var storage = firebase.storage();
// var storageRef = storage.ref();
// var imagesRef = storageRef.child('images/file....')

app.get('/api', function(request, response){
	response.send('Library API is running')
});

app.get('/api/books', function(request, response){
	return BookModel.find(function(err, books){
		if(!err){
			return response.send(books);
		} else {
			return console.log(err);
		}
	});
});

var port = 4711;

app.listen(port, function(){
	console.log('Express server listening on port %d in %s mode', port, app.settings.env)
});

mongoose.connect('mongodb://localhost/library_database');

var Book = new mongoose.Schema({
	title : String,
	author: String,
	releaseDate: Date
});

var BookModel = mongoose.model('Book', Book);