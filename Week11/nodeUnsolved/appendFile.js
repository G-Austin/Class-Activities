var fs = require('fs');

var textfile = process.argv [2];

fs.appendFile(textfile, 'Hello Kitty\n', function(err) {
	if (err) {
		console.log('we have an error', err);
	} else {
    	console.log('content added');
	}
});