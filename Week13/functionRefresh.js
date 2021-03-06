// Write a function that accepts a string and a function as arguments. 
//It should log the string, and then run the function.
function func1(someString, someFunction) {
	console.log(someString);
	someFunction();
};
// Write a function that accepts a boolean value and a function as arguments. 
//It should run the function if and only if the boolean argument is true.
var func = function() {

};
function runIf(bool, func) {
	if (bool) {
		func();
	}
}

// Write a function that accepts a function (F) and a value (V), and returns a 
//function that returns the result of running F on V. This sounds tricky, 
//but it’s easier than it sounds—just take it step by step!
function myFunc(func, value) {
	return function(value) {
		return func(value);
	}
}

// Finally, write a short message to a file using fs.writeFile. Does this function use callbacks? 
//If so, identify them.