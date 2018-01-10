var operand = process.argv[2]
var num1 = parseInt(process.argv[3]);
var num2 = parseInt(process.argv[4]);

if (operand == 'add') {
	console.log(num1 + num2);
}

if (operand == 'subtract') {
	console.log(num1 - num2);
}

if (operand == 'multiply') {
	console.log(num1 * num2);
}

if (operand == 'divide') {
	console.log(num1 / num2);
}

if (operand == 'remainder') {
	console.log(num1 & num2);
}

