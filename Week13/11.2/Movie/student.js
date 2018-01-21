// Instructions

// In this activity we are going to make two constructors in two different files in which one constructor calls upon the other within it.

// The first constructor function is called “Student” and has the following properties within it...

// Name of the student
// Favorite subject
// Current GPA
var Student = function(gender, subject, gpa) {
	this.gender = gender;
	this.subject = subject;
	this.gpa = gpa;


}

var createStudent = function() {
	
}

module.exports = Student;

// BONUS: Make it so that that your application can take in user input to add new classes and new students to those classes.