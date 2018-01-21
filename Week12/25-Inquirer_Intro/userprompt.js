// Create a basic command line Node application using the inquirer package.
var inquirer = require("inquirer");
// Your application should ask the user any five questions of your choosing.

// The question set should include at least one:
inquirer
	.prompt([

	{
	  type: "input",
	  message: "What is your name?",
	  name: "username"
	},

	{
      type: "password",
      message: "What is your password?",
      name: "password"
    },

    {
      type: "list",
      message: "What is your favorite food?",
      choices: ["Pizza", "Phad Thai", "Caesar Salad"],
      name: "food"
    },

    {
      type: "checkbox",
      message: "What is your age?",
      choices: ["a baby", "15-25", "26-35", "36-45", "46-55", "old as dirt"],
      name: "age"
    },

    {
      type: "confirm",
      message: "Are you sure?",
      name: "confirm",
      default: true
    }

	])

	.then(function(inquirerResponse) {
		console.log(inquirerResponse);
		if (inquirerResponse.password === "silly") {
			console.log("\nI'm silly too!");
		} else {
			console.log("\nApparently you're not very silly.")
		}
	})
// Basic input,
// Password
// List,
// Checkbox,
// Confirm
// Then if a user’s password matches a pre-defined password, re-display the data back to the user with some text.

// HINT: See the inquirer GitHub documentation “examples” page if you need help.

// Remember to get creative with your code!
