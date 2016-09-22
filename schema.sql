CREATE TABLE products (
  ID SERIAL PRIMARY KEY NOT NULL,
  Name varchar(40),
  Description varchar(200),
  Price int,
  Imageurl varchar(200)
);
