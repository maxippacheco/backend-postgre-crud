CREATE DATABASE firtsapi;

CREATE TABLE users(
	id SERIAL PRIMARY KEY,
	name VARCHAR(40),
	email TEXT,
	password TEXT
);

INSERT INTO users(name, email, password) VALUES
	('joe', 'joe@test.com', 'password'),
	('saymon', 'saymon@test.com', 'password');
