DROP DATABASE IF EXISTS books_db;
 
CREATE DATABASE books_db;


CREATE TABLE club (
  id int AUTO_INCREMENT,
  name varchar(30) NOT NULL,
  PRIMARY KEY(id)
);

CREATE TABLE books (
  id int AUTO_INCREMENT,
  title varchar(30) NOT NULL, -- Pre-populated, and entered by user
  autor varchar(30) NOT NULL,
  club_id int NOT NULL,
  PRIMARY KEY(id),
  FOREIGN KEY(club_id) REFERENCES club(id)
);