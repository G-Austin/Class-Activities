DROP DATABASE IF EXISTS animals_db;
CREATE DATABASE animals_db;

USE animals_db;

CREATE TABLE people (
    name VARCHAR(30)NOT NULL,
    has_pet BOOLEAN NOT NULL,
    pet_name VARCHAR(30),
    pet_age INTEGER(10)
);

DROP DATABASE IF EXISTS favorite_db;
CREATE DATABASE favorite_db;

USE favorite_db;

CREATE TABLE favorite_foods (
	food VARCHAR(30)NOT NULL,
    score INTEGER(10)
);

CREATE TABLE favorite_songs(
	song VARCHAR(100)NOT NULL,
    artist VARCHAR(50),
    score INTEGER(10)
);

CREATE TABLE favorite_movies(
	id INT NOT NULL AUTO_INCREMENT,
    movie VARCHAR(40)NOT NULL,
    five_times BOOLEAN NOT NULL,
    score INTEGER(10),
    PRIMARY KEY (ID)
);

INSERT INTO favorite_foods VALUES("Zack\'s Pizza",4);

SELECT * FROM favorite_foods;

USE animals_db;

SELECT * FROM people;

INSERT INTO people (name, has_pet, pet_name, pet_age)
VALUES("Jen", true, "Rocky", 4);

Set SQL_SAFE_UPDATES = 0;

UPDATE people SET pet_age = 10 Where name = "Glo";

USE favorite_db;

SELECT * FROM favorite_foods;

INSERT INTO	favorite_foods (food, score)
VALUES("Palmita", 5);

CREATE TABLE pets (
	id INTEGER(10) AUTO_INCREMENT NOT NULL,
    name VARCHAR(30) NOT NULL,
    age INTEGER(10) NOT NULL,
    PRIMARY KEY(id)
);

ALTER TABLE people ADD id INTEGER(10) NOT NULL AUTO_INCREMENT FIRST,
ADD PRIMARY KEY(id);