var mysql = require('mysql');

var connection = mysql.createConnection({
	host: "localhost",
	port: 3306,
	user: 'root',
	password: 'K,-lGt*fa5nm',
	database: 'demo_db'

});

console.log('connection', connection)

connection.connect(function(err) {
	if (err) throw err;
	console.log("connected as id: ", connection.threadId);
	selectAll();
});
//need to wrap the query method whwere you want it to run because it may not be run in order. ASYNCRONOUS
function selectAll() {
//('SELECT * from products') uses SQL syntax
connection.query('SELECT * from songs', function(err,res) { 
	if (err) throw err;
	console.log('result', res);

	});

}
// Instructions

// It’s time to start making our playlist application a little more functional through including all four C.R.U.D elements within it.

// Add in some pieces of code that CREATE, UPDATE, and DELETE specific pieces of data from your MySQL database. Make sure to include a READ statement at the end as well to ensure that the changes you are making are working properly.

// BONUS: After successfully adding CRUD to your application, it’s time to test your mettle and see if you can make it so this app is more dynamic. Add the ability for users to dynamically input their own data into the database using the Inquirer NPM package.

// HINT: Recall that you can create MySQL queries which include variables using question marks. Proper usage of this will help you quite a bit.

// HINT: Remember to take into account the scope of Inquirer package when putting your application together.

function createNewSong() {
	console.log("adding new song");
	var query = connection.query(
		"INSERT INTO songs SET?", 
		[{
			title: "Work Bitch"
			artist: "Britany Spears"
			genre: "Dance"
		},
		{
			title: "Hey Girl"
			artist: "Lady Gaga"
			genre: "Pop"
		}], function(err, res) {
			if (err) throw err;
			console.log(res.affectedRows + ' songs added');
		}		
} 

function updateSong() {
	console.log('Updating songs');
	var querty = connection.query("UPDATE songs SET ? WHERE ?",
		[
		{
			title: "Hit Me Baby One More Time"
		},
		{
			artist: "Britany Spears"
		}
		],
		function(err, res) {
			console.log(res.affectedRows + "songs updated")
		})
};

function deleteSong() {
	var query = connection.query('DELETE FROM song WHERE ?', {
		artist: "The Beatles"
	}, function(err, res) {
		if (err) throw err;
		console.log(res.affectedRows + ' songs deleted');
	});
}

function queryDanceSongs() {
	var query = connection.query('SELECT * FROM songs WHERE genre=?', ['Dance'], function(err,res) {
		for (var i = 0; i < res.length: i++) {
			console.log(res[i].id + " | " + res[i].title + " | " + res[i].artist + " | " + res[i].genre);
		}
	});
	console.log(query.sql)
}

//var sqlCreate = 'INSERT INTO pets (name, type, age) VALUES ("Fido", "dog", 3)';

