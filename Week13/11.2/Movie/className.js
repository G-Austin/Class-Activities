// The second constructor function is called “Class” and has the following properties within it...
var Student = require("./student.js");

var Classroom = function(humans, number, professor,roomNumber) {
	this.students = [];
	this.number = number;
	this.professor = professor;
	this.roomNumber;

	this.addStudent = function(x,y,z){
		this.students.push(new Student(x,y,z));
	};
	//a method that creates a 
	this.studentCount = function() {
		return this.students.length;
	}
}

module.export = Classroom;
// An array of students within the class
// Number of students in the class
// Name of the professor
// Room number
// The Student constructor function from above which adds a new student to the class