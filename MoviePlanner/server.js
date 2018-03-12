var express = require("express");
var bodyParser = require("body-parser");

var app = express();
var port = 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "K,-lGt*fa5nm",
  database: "movie_saver_db"
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }

  console.log("connected as id " + connection.threadId);
});
// Create a full-stack application with Express, MySQL and Handlebars.
// HINT: this web application will be very similar to the app your instructor just demonstrated and slacked out. Please feel free to leverage that code when creating this code.
// Create a schema.sql file. Inside of that file, do the following:
// Make a database called moviePlannerDB
// Inside of that database make a movies table which will contain a movie column and an id column. The id will be automatically incremented while also being the primary key.
// Run your schema.sql file within MySQL Workbench before moving onto the next steps.
// In your server.js file, you will create four routes: get, post, put, and delete.

// Render the main index.handlebars when the ‘/’ get route is hit with all of the movies from the movies table.
//
// Your application should have a set of routes on ‘/movies’ for create, update, and delete operations on the movies table.
//
// Show a delete button next to each movie. When one of the delete buttons is clicked, the code should send a DELETE request to delete the associated movie from your database.
//
// Additionally, show the form that the user can use to add a movie to be watched. When the submit button is clicked, the code will post to the ‘/movies’ route, which will insert the movie from the form into the movies table and return the ID of the new movie.
//
// Have another form that will update a movie in the movies table. The form will include two inputs: an id input and a movie title input. Remember to leverage a PUT method.
//
// Remember: best practices for REST include:
//
// Put your REST API on it’s own URL (e.g. ‘/todos’).
// A POST that creates an item should return the ID of the item it created.
// PUT and DELETE should specify the ID of the item they’re intended to affect in the URL (e.g. ‘/todos/123’).
// If the ID for the item specified in a PUT or DELETE couldn’t be found, return a 404.
// If an error occurs in the server, return an error code (e.g. 500).
// Root get route
app.get("/", function(req, res) {
  connection.query("SELECT * FROM movies;", function(err, data) {
    if (err) throw err;

    // Test it
    // console.log('The solution is: ', data);

    // Test it
    // return res.send(data);

    res.render("index", { movies: data });
  });
});

// Post route -> back to home
app.post("/", function(req, res) {
  // Test it
  // console.log('You sent, ' + req.body.movie);

  // Test it
  // return res.send('You sent, ' + req.body.movie);

  // When using the MySQL package, we'd use ?s in place of any values to be inserted, which are then swapped out with corresponding elements in the array
  // This helps us avoid an exploit known as SQL injection which we'd be open to if we used string concatenation
  // https://en.wikipedia.org/wiki/SQL_injection
  connection.query("INSERT INTO movies (movie) VALUES (?)", [req.body.movie], function(err, result) {
    if (err) throw err;

    res.redirect("/");
  });
});

app.listen(port);
