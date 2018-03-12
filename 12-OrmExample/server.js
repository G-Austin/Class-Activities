var orm = require("./config/orm.js");
// Instructions
//
// You will be creating a holiday party planner application. We want to help create
// parties for our clients whilst also keeping track of all the events that we are host.
// In MySQL, create a database called party_db with two tables structured like the tables below.
// Utilize the provided schema.sql and seeds.sql file in order to build the tables and seed initial values.

// Create a Node MySQL application with an ORM that executes once the server is launched.
//
// You will not need Express or Handlebars for this assignment. Use console.log to print the data collected to the console.
//
// Create a MySQL database with the tables and data which were slacked out to you.
//
// Create a Node app and connect it to MySQL with a config folder and with a connection.js file inside of that folder.
//
// Create an orm.js file, and make an ORM that will do the following:
//
// Find all parties, ordering them by party cost
// Find parties by the name of the party
// Find the client with the most parties
// BONUS: create a function within your ORM that will let the user add more clients and parties to the database.
// Find all the pets ordering by the lowest price to the highest price.
orm.selectAndOrder("party_name", "parties", "party_cost");

// Find a pet in the pets table by an animal_name of Rachel.
orm.selectWhere("parties", "party_name", "Top Gun");
//
// // Find the buyer with the most pets.
orm.findWhoHasMost("client_name", "client_id", "clients", "parties");
