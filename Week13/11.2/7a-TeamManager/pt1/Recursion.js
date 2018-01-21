// Over the course of this assignment you are going to put together a function which uses constructors and user input to create and manage a team of players.
var inquirer = require("inquirer");
// Start out by creating a constructor function called “Player” with the following properties and methods...
function Player(name, position, offense, defense) {
// name: Property which contains the player’s name
	this.name = name;
// position: Property which holds the player’s position
	this.position = position;
// offense: Property which is a value between 1 and 10 to show how good this player is on offense
	this.offense = offense;
// defense: Property which is a value between 1 and 10 to show how good this player is on defense
	this.defense = defense;
// goodGame: Method which increases either the player’s offense or defense property based upon a coinflip.
	this.goodGame = function() {
	
	}
// badGame: Method which decreases either the player’s offense or defense property based upon a coinflip.
	this.badGame = function() {

	}
// printStats: Method which prints all of the player’s properties to the screen
	this.printStats = function() {
		console.log("Name: " + this.name + "\nPostion: " + this.position + "\nOffense: " + this.offense + "\nDefense: " + this.defense);

	}	
	
}
// Now create a program which allows the user to create 8 unique players; 5 starters and 3 subs. It should take as user input the name, position, offense, and defense of each player.
var count = 0;

var starters = [];
var subs = [];
var team = [];

var createPlayer = function() {
	if (count < 2) {
		console.log("New Player:")

		inquirer.prompt([
	      {
	        name: "name",
	        message: "Player's name?"
		}, {
			position: "postion",
			message: "Player's position?"
		}, {
			offense: "offense",
			message: "Player's offensive ability"
		}, {
			defense: "defense",
			message: "Player's defensive ability"
		}
		]).then(function(answers) {
			var player = new Player(answers.name, answers.position, answers.offense, answers.defense)
		})
	}
}	
// Once all of the players have been created, print their stats.
createPlayer();
// Once your code is functioning properly, move on to create a function called “playGame” which will be run after all of the players have been created and will do the following:

// Run 5 times. Each time the function runs:
// Two random numbers between 1 and 20 are rolled and compared against the starters’ offensive and defensive stats
// If the first number is lower than the sum of the team’s offensive stat, add one point to the team’s score.
// If the second number is higher than the sum of the team’s defensive stat, remove one point from the team’s score.
// After the score has been changed, prompt the user to allow them to substitute 1 player from within the starters array with 1 player from within the subs array.
// After the game has finished (been run 5 times):
// If the score is positive, run goodGame for all of the players currently within the starters array.
// If the score is negative, run badGame for all of the players currently within the starters array.
// If the score is equal to zero, do nothing with the starters.
// Give the user a message about if they won, and the status of their starters.
// After printing the results, ask the user if they would like to play again.
// Run playGame from the start once more if they do.
// End the program if they don’t.
// HINT: Remember to use recursion when looping with inquirer! Otherwise your program might not return the prompts as you expect.

// HINT: It has been a while since we have worked with random numbers explicitly. If you are having troubles, look up Math.random on Google and you should find some resources to help.