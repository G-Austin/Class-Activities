// // Core node package for reading and writing files
// var fs = require("fs");

// // This block of code will create a file called "movies.txt".
// // It will then print "Inception, Die Hard" in the file
// fs.writeFile("movies.txt", "Inception, Die Hard", function(err) {

//   // If the code experiences any errors it will log the error to the console.
//   if (err) {
//     return console.log(err);
//   }

//   // Otherwise, it will print: "movies.txt was updated!"
//   console.log("movies.txt was updated!");

// });

var fs = require('fs');

fs.writeFile("movies.txt", "Jaws, Jumanjii, GodFather, Titanic", function(err) {
	if (err) {
		console.log('there was an error', err);
	}

});
console.log('movies.txt was updated');

fs.readFile("movies.txt", 'utf8', function(error, data){
	if (error) {
		console.log("Error reading this file", error);
	}
	var dataArray = data.split(',');
	console.log('dataArray', dataArray);
});