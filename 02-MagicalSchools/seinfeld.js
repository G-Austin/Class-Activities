// Instructions

// Create a seinfeld_db database with an actors table.

// The actors table will have a column for id (PRIMARY KEY AUTO_INCREMENT int), name (varchar), coolness_points (int), and attitude (varchar).
// Add in four actors with different names, coolness_points, and attitudes.




// Create a Node Application with Express, MySQL, and Body Parser with three Express routes.
// Dependencies
var express = require("express");
var mysql = require("mysql");

// Create express app instance.
var app = express();

// Specify the port.
var port = 3000;

// MySQL DB Connection Information (remember to change this with our specific credentials)
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "K,-lGt*fa5nm",
  database: "seinfeld"
});

// Initiate MySQL Connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Create a /cast route that will display all the actors and their data ordered by their id’s.
app.get("/actors", function(req, res) {
	connection.query("SELECT * FROM actors", function(err, result) {
		var html = "<h1> Actors </h1>";

		html += "<ul>";

		for (var i = 0; i < result.length; i++) {
			html += "<li><p> ID: " + result[i].id + "</p>";
			html += "<p>Actor: " + result[i].name + "</p></li>";
			html += "<p>Coolness_Points: " + result[i].coolness_points + "</p></li>";
			html += "<p>Attitude: " + result[i].attitude + "</p></li>";
		}

		html += "</ul>";

		res.send(html);
	});
});

// Create a /coolness-chart route that will display all the actors and their data ordered by their coolness points.
app.get("/coolness", function(req, res) {
	connection.query("SELECT * FROM actors ORDER by coolness_points DESC", function(err, result) {
		var html = "<h1> Coolness Points </h1>";
        
		html += "<ul>";

		for (var i = 0; i < result.length; i++) {
			html += "<li><p> ID: " + result[i].id + "</p>";
			html += "<p>Actor: " + result[i].name + "</p></li>";
			html += "<p>Coolness_Points: " + result[i].coolness_points + "</p></li>";
			html += "<p>Attitude: " + result[i].attitude + "</p></li>";
		}

		html += "</ul>";

		res.send(html);
	});
});

app.get("/attitude-chart/:att", function(req, res) {
	connection.query("SELECT * FROM actors WHERE attitude = ?", req.params.att, function(err, result) {

		var html = "<h1> Actors with the Attitude: </h1>" + req.params.att;
        
		html += "<ul>";

		for (var i = 0; i < result.length; i++) {
			html += "<li><p> ID: " + result[i].id + "</p>";
			html += "<p>Actor: " + result[i].name + "</p></li>";
			html += "<p>Coolness_Points: " + result[i].coolness_points + "</p></li>";
			html += "<p>Attitude: " + result[i].attitude + "</p></li>";
		}

		html += "</ul>";

		res.send(html);
	});
});
app.listen(port);

// Create a /attitude-chart/:att route that will display all the actors for a specific type of attitude.
