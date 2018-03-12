// Dependencies
var express = require("express");

// Create express app instance.
var app = express();

// Routes
// What routes do you need to have? Which ones are optional?
// TODO Add your routes here
app.get("/:operator/:num1/:num2", function(req, res) {
	var operator = req.params.operator;
	//req.params is grabbing data from the URL and is a function of expressparseInt
	var num1 = parseInt(req.params.num1);
	var num2 = parseInt(req.params.num2);
  // TODO parse out the variables from the request
  // Parameters are received from the URL
  // TODO make sure they're converted to integers (and not strings)
  // Parameters are converted to integers

  // Initialize the result variable to send later
  var result;
  // Switch statement chooses operation based on the operation parameter.
  switch (operator) {
    // BONUS - How could you use * + etc. inside the app.get()?
    case "add": result = (num1 + num2);
      // Add your logic here. Pun intended.
      break;
    case "subtract": result = (num1 - num2);
      // Subtract logic
      break;
    case "multiply": result = (num1 * num2);
      // Multiply
      break;
    case "divide": result = (num1 / num2);
      // Divide
      break;
    default:
      // Handle anything that isn't specified
      result =
        "Sorry! The only valid operations are add, subtract, multiply, and divide.";
  }

  // We return the result back to the user in the form of a string
  res.send(result.toString());

});

// Initiate the listener.
app.listen(3002, function() {
	console.log("Server running on PORT 3002")
});
