// Instructions: 
// Build a Node application that takes in a location input via the command line, then geocodes it using the geocoder NPM package.
// Then console.log the geocoding information for display.

// Easier: User will provide the city and state in the following format: "Atlanta, GA", "Houston, TX"
// Slightly More Challenging: User will provide the address in any format: "151 Sip Ave Jersey City, NJ", "Austin, TX", etc.

// All: Be sure to console log the output using JSON.stringify in "pretty-print" format. 

// ========================================================================================================================

// Include the geocoder NPM package (Remember to run "npm install geocoder"!)

var geocoder = require('geocoder');
var nodeArg = process.argv;
var address = "";

for (var i = 2; i < nodeArg.length; i++) {
	
	address = address + " " + nodeArg[i]
}

console.log("Searching for ", address);

geocoder.geocode(address, function(err, data) {

	console.log(JSON.stringify(data, null, 2));

})


// var geocoder = require('geocoder');
// var userInput = process.argv;

// // Take in the command line arguments
// geocoder.geocode(userInput, function(err, data) {
// 	if (err) {
// 		console.log("error", err);
// 	}

// 	console.log(JSON.stringify(data, null, 2));
// });
	
// Build your address as an array or string


// Then use Geocoder NPM to geocode the address
