

var express = require("express");
var exphbs = require("express-handlebars");

// Create an instance of the express app.
var app = express();

// Specify the port.
var port = 3000;

// Set Handlebars as the default templating engine.
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var icecreams = [
  {name: 'vanilla', price: 10, awesomeness: 3},
  {name: 'chocolate', price: 4, awesomeness: 8},
  {name: 'banana', price: 1, awesomeness: 1},
  {name: 'thetonightdough', price: 5, awesomeness: 7},
  {name: 'halfbaked', price: 6, awesomeness: 10},
];

// Routes
app.get("/icecreams", function(req, res) {
  res.render("ics", { icecreams });

});


app.listen(port, function() {
  console.log("listening on port: ", port)
})
