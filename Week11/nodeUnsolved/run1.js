var process1 = process.argv[2];
var process2 = process.argv[3];

console.log('variables', process1 + process2);

if (process1 === process2) {

	console.log("The two values are true!");

} else if ((process1 % 7) === 0 && (process2 % 7) === 0){

	console.log("These are multiples of 7!")

} else {
	
	console.log("These two values are not equal")
}