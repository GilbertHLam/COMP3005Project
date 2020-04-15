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
	role    varchar(10) not null,
    shippingInfoId varchar(20) not null,
    billingInfoId varchar(20) not null,
    foreign key (shippingInfoId) references shippingInfo (shippingId)
    foreign key (billingInfoId) references billingInfo (billingId)
	primary key (username)
);

/*
This DDL statements creates the orders table.

The orders table contains 8 attributes:
    orderNumber => order number stored as string
    user => username stored as string
    tracking => tracking code stored as string
    total => total for the order stored as an integer, in cents
    ISBNS => ISBNs of books in the order, stored as a string (ISBN seperated by commas)
    shippingInfoId => shipping id stored as a string
    billingInfoId => billing id stored as a string
*/
create table orders (
    orderNumber varchar(20) not null,
    user varchar(20) not null,
    tracking varchar(20) not null,
    total integer,
    ISBNs varchar(20) not null,
    shippingInfoId varchar(20) not null,
    billingInfoId varchar(20) not null,
    date date,
    primary key (orderNumber)
    foreign key (shippingInfoId) references shippingInfo (shippingId)
    foreign key (billingInfoId) references billingInfo (billingId)
);

/*
This DDL statements creates the books table.

The books table contains 9 attributes:
   ISBN => ISBN of the book stored as a string
   name => name of the book stored as a string
   author => Author name of the book stored as a string
   genre => Genre of the book stored as a string
   pages => the number of pages in the book stored as an integer
   imgSrc => URL to image of the book cover stored as a string
   description => Description of the book stored as a string
   publisher => name of the book's publisher stored as a string
   publisherCut => publisher cut rate stored as an integer
*/
create table books (
    ISBN varchar(20) not null,
    name varchar(20) not null,
    author varchar(20) not null,
    genre varchar(20) not null,
    pages integer,
    imgSrc varchar(20) not null,
    description varchar(40) not null,
    publisher varchar(20) not null,
    publisherCut integer,
    primary key (ISBN)
    foreign key (publisher) references publishers (name)
);

/*
This DDL statements creates the publishers table.

The publishers table contains 9 attributes:
   name => publishers name stored as a string
   addressId => id of the address stored as a string
   email => email of the publisher stored as a string
   phone => phone number of the publisher stored as a string
   bankTransitNumber => transit number of the publisher's bank account stored as an integer
   bankInstitutionNumber => institution number of the publisher's bank account stored an an integer
   bankAccountNumber => account number of the publisher's banka ccount stored as an integer
*/
create table publishers (
    name varchar(20) not null,
    addressId varchar(20) not null,
    email varchar(20) not null,
    phone varchar(20) not null,
    bankTransitNumber integer,
    bankInstitutionNumber integer,
    bankAccountNumber integer,
    primary key (name),
    foreign key (addressId) references addresses (addressId)
);

/*
This DDL statements creates the billingInfo table.

The billingInfo table contains 6 attributes:
   billingId => id of the billing address stored as a string
   user => user that this billing address belongs to stored as a string
   addressId => id of the address in the addresses table stored as a string
   ccNumber => credit card number of user stored as an integer
   ccExpiry => expiry of the credit card stored as an integer
   ccCVC => CVC of the credit card stored as an integer
*/
create table billingInfo (
    billingId varchar(20) not null,
    user varchar(20) not null,
    addressId varchar(20) not null,
    ccNumber integer,
    ccExpiry integer,
    ccCVC integer,
    primary key (billingId),
    foreign key (addressId) references addresses (addressId)
);

/*
This DDL statements creates the shippingInfo table.

The shippingInfo table contains 2 attributes:
   shippingId => id of the shipping info stored as a string
   addressId => id of the address in the addresses table stored as a string
*/
create table shippingInfo (
    shippingId varchar(20) not null,
    addressId varchar(20) not null,
    primary key (shippingId),
    foreign key (addressId) references addresses (addressId)
);

/*
This DDL statements creates the addresses table.

The addresses table contains 8 attributes:
   addressId => id of the address stored as a string
   city => city of the address stored as a string
   province => province of the address stored as a string
   country => country of the address stored as a string
   postalCode => postalCode of the address stored as a string
   imgSrc => URL to image of the book cover stored as a string
   firstName => first name of the user that this address belongs to stored as a string
   lastName => last name of the user that this address belongs to stored as a string
*/
create table addresses (
    addressId varchar(20) not null, 
    city varchar(20) not null,
    province varchar(20) not null,
    country varchar(20) not null,
    postalCode varchar(20) not null,
    phone varchar(20) not null,
    firstName varchar(20) not null,
    lastName varchar(20) not null,
    primary key (addressId)
);