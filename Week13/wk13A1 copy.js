//n this activity, we are going to create a constructor function called “Programmer” which can be used to create objects containing information on various programmers.

//Your “Programmer” constructor should be able to take in the following information...
// The programmer’s name
// Their position/job title
// How old they are
// Favorite programming language
function Programmer(name, position, age, language) {
	this.name = name;
	this.position = position;
	this.age = age;
	this.language = language;
	// this.printInfo = function() {
	// 	console.log(this);
	}
//Prototypes are used to keep the code modular. When you get larger code, this will be important.
// Now create a method for the constructor that would print all of the information contained within an object to the console.
Programmer.prototype.printInfo = function() {
	console.log("Name: " + this.name + "\nPosition: " + this.position + "\nAge: " + this.age + "\nLanguage: " + this.language)
}



var glo = new Programmer("Glo", "Web Developer", "33", "JavaScript");

// Finally, create a “Programmer” object and call the method to print its contents
glo.printInfo();