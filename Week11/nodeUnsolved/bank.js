var action = process.argv[2];
var amount = parseInt(process.argv[3]);
var balance = 20000
var fs = require('fs');

	switch(action) {
		case 'total':
		total();
		break;

		case 'deposit':
		deposit();
		break;

		case 'withdraw':
		withdraw();
		break;

		case 'lotto':
		lotto();
		break;
	}

function deposit() {
	var currentBalance = appendFile(balance + amount);
	console.log('deposit', currentBalance)
}

function withdraw() {

	var currentBalance = appendFile(balance - amount);
	console.log('withdraw', currentBalance)
}

function total() {
	
	total.toFixed[2];
}



// If the "Deposit" function is called...
function deposit() {

  // We will add the value to the bank file.
  fs.appendFile("bank.txt", ", " + value, function(err) {
    if (err) {
      return console.log(err);
    }
  });

  // We will then print the value that was added (but we wont print the total).
  console.log("Deposited " + value + ".");
}

// If the "Withdraw" function is called
function withdraw() {

  // We will add a negative value to the bank file.
  fs.appendFile("bank.txt", ", -" + value, function(err) {
    if (err) {
      return console.log(err);
    }
  });

  // We will then print the value that was subtracted (but we wont print the total).
  console.log("Withdrew " + value + ".");
}


// If the "Lotto" function is called
function lotto() {

  // We will subtract 25 cents
  fs.appendFile("bank.txt", ", -.25", function(err) {
    if (err) {
      return console.log(err);
    }
  });

  // Then grab a random number
  var chance = Math.floor((Math.random() * 10) + 1);

  // If the random number equals 1...
  if (chance === 1) {

    // We will then add $2 to the account.
    fs.appendFile("bank.txt", ", 2", function(err) {
      if (err) {
        return console.log(err);
      }
    });

    // And tell the user the amount was added.
    console.log("Congrats you won the lottery!");

  // Otherwise we will tell them they lost 25 cents.
  }
  else {
    console.log("Sorry. You just lost 25 cents. Maybe you should get a job instead.");
  }
}


