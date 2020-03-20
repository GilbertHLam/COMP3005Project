/*
This DDL statements creates the users table.

The users table contains 4 attributes:
    username => username stored as a string
    email => email stored as a string
    password => salted hashed passwords stored as a string
    role => role of the user stored as a string (Buyer vs Seller)
*/
create table users (
    username    varchar(20) not null,
	email   varchar(20) not null,
	password    varchar(20) not null,
	role    varchar(10)
	primary key (username)
);`