var mysql = require('mysql');
var inquirer = require('inquirer');

var connection = mysql.createConnection({
	host: "localhost",
	port: 3306,
	user: 'root',
	password: 'K,-lGt*fa5nm',
	database: 'greatBay_DB'

});

console.log('connection', connection);

connection.connect(function(err) {
	if (err) throw err;
	//console.log('Connected as id: ', connection.threadId);

});

function userPrompt() {
	inquirer.prompt([
      {
        type: "input",
        message: "Would you like to post or bid on an item?",
     	  name: "option"
      }
    ]).then(function(inquirerResponse) {
    	if (inquirerResponse.option === "bid") {
    		console.log("OK let's bid!");
    		seeItems();
    	} else {
    		console.log("OK let's post an item");
    	}
    })
}

function seeItems() {
  connection.query("SELECT * FROM auctions", function(err, res) {
    if (err) throw err;
    console.log("result", res);
    // var bidItems = res[0].item_name;
    // console.log("Bid Items Available", bidItems);
  });
}

function postItem() {
	console.log("What would you like to post?")
	inquirer.prompt([
	{
		message: "What would you like to post?";
		item_name: "item_name",
		category: "category",
		starting_bid: "starting_bid"
	}])
}
userPrompt();


