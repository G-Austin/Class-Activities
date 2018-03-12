var http = require("http");
var fs = require("fs");

var PORT = 8080;

var server = http.createServer(handleRequest);

server.listen(PORT, function() {
	console.log("The server is listening: ", PORT);
})

function handleRequest(request, response) {

	var path = request.url;

	switch (path) {
		case "/":
			return displayRoot(path, request, response);

		// case "/food":
		// 	return displayFood(path, request, response);

		// case "/movies":
		// 	return displayMovies(path, request, response);

		// case "/CSS frameworks":
		// 	return displayCSS(path, request, response);
		// default:
		// 	return display404(path, request, response);
	}
}

function displayRoot(url, request, response) {
	fs.readFile(__dirname + "/fanpage.html", function(err, data) {
    // We then respond to the client with the HTML page by specifically telling the browser that we are delivering
    // an html file.
    if (err) throw err;
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(data);
  });
}

	response.writeHead(200, {"Content-Type": "text.html" });

	response.end(myHTML);
}