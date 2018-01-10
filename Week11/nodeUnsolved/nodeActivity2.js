var fs = require('fs');

fs.readFile("best_things_ever.txt", 'utf8', function(error, data) {
	if (error) {
		console.log("there was an error reading this file");
	}
	var output = data.split(",");
	// console.log('data 0: ', data[0]);
	// console.log('data 1: ', data[1]);
	// console.log('data 2: ', data[2]);
	for (var i = 0; i < output.length; i++) {
		console.log(output[i]);
	}
});