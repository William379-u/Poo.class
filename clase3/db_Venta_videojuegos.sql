create database Venta_videojuegos;
use Venta_videojuegos;

create table juego
(
id int primary key auto_increment,
nombre_del_juego varchar(200),
digital varchar(10),
fisico varchar(10),
precio int
);

create table cliente
( 
id int primary key auto_increment,
nombre_del_cliente varchar(200),
edad int,
fecha_de_venta date
);

create table tipo_juegos
(
id int primary key auto_increment,
tipo_de_juego varchar(50)
);