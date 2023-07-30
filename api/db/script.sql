CREATE DATABASE IF NOT EXISTS
umBanco;
use umBanco;
CREATE table if not EXISTS products(
    id int primary key not null,
    name varchar (255),
    price decimal(10,2)
);

insert into products value(1,"abacate", 23.2);
insert into products value(2,"laranja", 11.83);