

insert into compania values (1,'Trucker Mind Admin'), (2,'Trans Collazos');

select * from compania c;

insert into perfil (nombre,id_compania_perfil) 
values ('Administrador',1),('Admin TC',2),('Contador',2),('Reportes',1);

select * from perfil p ;

INSERT INTO departamento(nombre) VALUES (UPPER('Amazonas'));
INSERT INTO departamento(nombre) VALUES (UPPER('Antioquia'));
INSERT INTO departamento(nombre) VALUES (UPPER('Arauca'));
INSERT INTO departamento(nombre) VALUES (UPPER('Atlántico'));
INSERT INTO departamento(nombre) VALUES (UPPER('Bogotá'));
INSERT INTO departamento(nombre) VALUES (UPPER('Bolívar'));
INSERT INTO departamento(nombre) VALUES (UPPER('Boyacá'));
INSERT INTO departamento(nombre) VALUES (UPPER('Caldas'));
INSERT INTO departamento(nombre) VALUES (UPPER('Caquetá'));
INSERT INTO departamento(nombre) VALUES (UPPER('Casanare'));
INSERT INTO departamento(nombre) VALUES (UPPER('Cauca'));
INSERT INTO departamento(nombre) VALUES (UPPER('Cesar'));
INSERT INTO departamento(nombre) VALUES (UPPER('Chocó'));
INSERT INTO departamento(nombre) VALUES (UPPER('Córdoba'));
INSERT INTO departamento(nombre) VALUES (UPPER('Cundinamarca'));
INSERT INTO departamento(nombre) VALUES (UPPER('Guainía'));
INSERT INTO departamento(nombre) VALUES (UPPER('Guaviare'));
INSERT INTO departamento(nombre) VALUES (UPPER('Huila'));
INSERT INTO departamento(nombre) VALUES (UPPER('La Guajira'));
INSERT INTO departamento(nombre) VALUES (UPPER('Magdalena'));
INSERT INTO departamento(nombre) VALUES (UPPER('Meta'));
INSERT INTO departamento(nombre) VALUES (UPPER('Nariño'));
INSERT INTO departamento(nombre) VALUES (UPPER('Norte de Santander'));
INSERT INTO departamento(nombre) VALUES (UPPER('Putumayo'));
INSERT INTO departamento(nombre) VALUES (UPPER('Quindío'));
INSERT INTO departamento(nombre) VALUES (UPPER('Risaralda'));
INSERT INTO departamento(nombre) VALUES (UPPER('San Andrés y Providencia'));
INSERT INTO departamento(nombre) VALUES (UPPER('Santander'));
INSERT INTO departamento(nombre) VALUES (UPPER('Sucre'));
INSERT INTO departamento(nombre) VALUES (UPPER('Tolima'));
INSERT INTO departamento(nombre) VALUES (UPPER('Valle del Cauca'));
INSERT INTO departamento(nombre) VALUES (UPPER('Vaupés'));
INSERT INTO departamento(nombre) VALUES (UPPER('Vichada'));


INSERT INTO ciudad(nombre,id_nombre) VALUES (UPPER('EL ENCANTO'),(SELECT id FROM departamento WHERE nombre = 'AMAZONAS'));
INSERT INTO ciudad(nombre,id_nombre) VALUES (UPPER('LA CHORRERA'),(SELECT id FROM departamento WHERE nombre = 'AMAZONAS'));
INSERT INTO ciudad(nombre,id_nombre) VALUES (UPPER('LA PEDRERA'),(SELECT id FROM departamento WHERE nombre = 'AMAZONAS'));
INSERT INTO ciudad(nombre,id_nombre) VALUES (UPPER('LA VICTORIA'),(SELECT id FROM departamento WHERE nombre = 'AMAZONAS'));
INSERT INTO ciudad(nombre,id_nombre) VALUES (UPPER('LETICIA'),(SELECT id FROM departamento WHERE nombre = 'AMAZONAS'));
INSERT INTO ciudad(nombre,id_nombre) VALUES (UPPER('MIRITI - PARANÁ'),(SELECT id FROM departamento WHERE nombre = 'AMAZONAS'));
INSERT INTO ciudad(nombre,id_nombre) VALUES (UPPER('PUERTO ALEGRIA'),(SELECT id FROM departamento WHERE nombre = 'AMAZONAS'));
INSERT INTO ciudad(nombre,id_nombre) VALUES (UPPER('PUERTO ARICA'),(SELECT id FROM departamento WHERE nombre = 'AMAZONAS'));
INSERT INTO ciudad(nombre,id_nombre) VALUES (UPPER('PUERTO NARIÑO'),(SELECT id FROM departamento WHERE nombre = 'AMAZONAS'));
INSERT INTO ciudad(nombre,id_nombre) VALUES (UPPER('PUERTO SANTANDER'),(SELECT id FROM departamento WHERE nombre = 'AMAZONAS'));
INSERT INTO ciudad(nombre,id_nombre) VALUES (UPPER('TARAPACÁ'),(SELECT id FROM departamento WHERE nombre = 'AMAZONAS'));
