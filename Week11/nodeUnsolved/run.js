var diffBands = require("./bands.js");

console.log(diffBands);

for (var key in diffBands) {
	if (diffBands.hasOwnProperty(key)) {
		console.log('A ' + key + " band is " + diffBands[key])
	}
}

// var input1 = process.argv[2];



