var dogs = {
	raining: true,
	noise: "Woof!",
	makeNoise: function() {
		if (this.raining === true) {
		console.log(this.noise);
		}
	}
}


var cats = {
	raining: false,
	noise: "Meow!",
	makeNoise: function() {
		if (this.raining === true) {
		console.log(this.noise);
		}
	}
}

dogs.makeNoise();
cats.raining === true;
cats.makeNoise();

// var rainingDogs = function (animal){
//     if (animal.raining === true) {
//     console.log(animal.noise);
//     }
// }

// var dogs = {
//     raining: true,
//     noise: 'Woof!',
//     makeNoise: function() {
//         rainingDogs(this);
//     }
// }

// let cats = {
//     raining: false,
//     noise: "mrewwww",
//     makeNoise: function() {
//         rainingDogs(this);
//     }
// }

// dogs.makeNoise();
// cats.raining = true;
// cats.makeNoise();