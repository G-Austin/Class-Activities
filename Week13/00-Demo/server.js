// Using the previous example as a guide, create an app that has two web servers.
// One that listens on port 7000 and one that listens on port 7500.
// The one listening on port 7000 will always tell the user something good about themselves.
// The one listening on 7500 will always tell the user something bad about themselves.
// Make sure you create a Github repo and commit this code!

// Look for other ways to expand what your server can do. As possibilities:
// Generate the good/bad phrase randomly from a list of predefined phrases
// Use the twitter package inside the response to also return a random tweet


var HTTP = require('http');
//defines the port
var PORT = 7000;
var PORT1 = 7500

function handleRequest7000(request7000, response7000) {
	response7000.end("You look super fit today!");
}

//create a server and save it to a variable
var server = HTTP.createServer(handleRequest7000);

server.listen(PORT, function() {
	console.log("Server listening on http://localhost:%s", PORT )
})

function handleRequest7500(request7500, response7500) {
	response7500.end("You're a fucking cunt!")
}

var server1 = HTTP.createServer(handleRequest7500);
var meanShit = ["I hate your face", "Go kick rocks", "Punch yourself in the nuts", "GFY"]

server1.listen(PORT1, function() {
	console.log("Server listening on http://localhost:%s", PORT1)
})