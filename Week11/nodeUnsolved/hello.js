var process1 = process.argv[2];
var process2 = process.argv[3];

console.log("variables", process1 + process2);

if (process1 === process2){

	console.log("the two values are equal")

} else {

	console.log("these two values are not equal")
}

console.log('The values are', (process1 == process2) ? 'equal' : 'equal')