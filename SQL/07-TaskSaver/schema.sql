/*

To run this file, we do the following in our Terminal:

1. Go to the directory of this sql file.

2. Get into our mysql console.

3. Run "source schema.sql"

*/

-- Create the database wish_saver_db and specified it for use.
CREATE DATABASE wish_saver_db;
USE wish_saver_db;

-- Create the table wishs.
CREATE TABLE wishs
(
id int NOT NULL AUTO_INCREMENT,
wish varchar(255) NOT NULL,
PRIMARY KEY (id)
);

-- Insert a set of records.
INSERT INTO wishes (wish) VALUES ('Get a job at Adobe.');
INSERT INTO wishes (wish) VALUES ('Pay off all credit card debt.');
INSERT INTO wishes (wish) VALUES ('Surf in Bali.');
