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
  database: "quotes_db"
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Express and MySQL code should go here.

app.listen(port, function() {
  console.log("Listening on PORT " + port);
});

//Use Handlebars to render the main index.html page with the todos in it.
app.get("/", function(req, res) {
  connection.query("SELECT * FROM quotes;", function(err, data) {
    if (err) {
      return res.status(500).end();
    }
    res.render("index", { quotes: data });
  });
});

// Create a new todo
app.put("/api/quotes/:id", function(req, res) {
  connection.query("UPDATE", [req.body.plan], function(err, result) {
    if (err) {
      return res.status(500).end();
    }
    // Send back the ID of the new todo
    res.json({ id: result.insertId });
    console.log({ id: result.insertId });
  });
});
