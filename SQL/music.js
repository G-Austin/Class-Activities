var mysql = require("mysql");
var inquirer = require('inquirer');
// create the connection information for the sql database
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "K,-lGt*fa5nm",
  database: "top_songsdb"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId + "\n");
  readArtists();
  repeatArtist();
});


function readArtists() {
  connection.query("SELECT * FROM TOP5000 WHERE artist = 'Bing Crosby'", function(err, res) {
    if (err) throw err;

    // Log all results of the SELECT statement
    console.log(res);
    connection.end();
   });
}

function repeatArtist() {

	connection.query("SELECT artist FROM TOP5000 GROUP BY artist HAVING COUNT(*) > 1", function(err, res) {
    if (err) throw err;

    console.log(res);
    connection.end();
 })
}