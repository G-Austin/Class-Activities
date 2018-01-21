function Character(name, profession, gender, age, strength, hitPoints) {
	this.name = name;
	this.profession = profession;
	this.gender = gender;
	this.age = age;
	this.strength = strength;
	this.hitPoints = hitPoints;
	this.printStats = function() {
		console.log(this)
	}


 this.isAlive = function () {
	if (this.hitPoints > 0){
		console.log(this.name + ' still draws breath.');
		return true;
	} else {
		console.log(this.name + " has died!");
		return false;
	}
}

 this.attack = function (character2) {
	character2.hitPoints -= this.strength
};

this.levelUp = function() {
	this.age += 1;
	this.strength += 5;
	this.hitPoints += 25;
}

}


var glo = new Character("Glo", "BAMF", "non-binary", 33, 30, 400);
var zee = new Character("Zee", "BabyPopperOuter", "female", 32, 25, 200 );
var jen = new Character("Jen", "ManCrusher", "female", 35, 27, 300);


while (zee.isAlive() === true && jen.isAlive() === true) {
	jen.attack(zee);
	glo.attack(jen);
	zee.attack(glo);
	glo.attack(zee);
	jen.attack(glo);
	zee.attack(jen);

	jen.printStats();
	glo.printStats();
	zee.printStats();
	//can also add 
	zee.poopsherpants = true;
	//add a method dynamically after the element has already been constructed
	glo.sharpenSword = function() {
		this.weaponSharpened = true
	};

}