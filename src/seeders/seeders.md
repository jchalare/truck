insert into companies (name) values ('Trucker Mind Admin'), ('Trans Collazos');

select \* from companies c;

insert into profiles (name,id_company)
values ('Administrador',(SELECT id FROM companies WHERE name = 'Trucker Mind Admin')),
('Admin TC',(SELECT id FROM companies WHERE name = 'Trans Collazos')),
('Contador',(SELECT id FROM companies WHERE name = 'Trans Collazos')),
('Reportes',(SELECT id FROM companies WHERE name = 'Trans Collazos'));

select \* from profiles p ;

INSERT INTO departmens(name) VALUES (UPPER('Amazonas'));
INSERT INTO departmens(name) VALUES (UPPER('Antioquia'));
INSERT INTO departmens(name) VALUES (UPPER('Arauca'));
INSERT INTO departmens(name) VALUES (UPPER('Atlántico'));
INSERT INTO departmens(name) VALUES (UPPER('Bogotá'));
INSERT INTO departmens(name) VALUES (UPPER('Bolívar'));
INSERT INTO departmens(name) VALUES (UPPER('Boyacá'));
INSERT INTO departmens(name) VALUES (UPPER('Caldas'));
INSERT INTO departmens(name) VALUES (UPPER('Caquetá'));
INSERT INTO departmens(name) VALUES (UPPER('Casanare'));
INSERT INTO departmens(name) VALUES (UPPER('Cauca'));
INSERT INTO departmens(name) VALUES (UPPER('Cesar'));
INSERT INTO departmens(name) VALUES (UPPER('Chocó'));
INSERT INTO departmens(name) VALUES (UPPER('Córdoba'));
INSERT INTO departmens(name) VALUES (UPPER('Cundinamarca'));
INSERT INTO departmens(name) VALUES (UPPER('Guainía'));
INSERT INTO departmens(name) VALUES (UPPER('Guaviare'));
INSERT INTO departmens(name) VALUES (UPPER('Huila'));
INSERT INTO departmens(name) VALUES (UPPER('La Guajira'));
INSERT INTO departmens(name) VALUES (UPPER('Magdalena'));
INSERT INTO departmens(name) VALUES (UPPER('Meta'));
INSERT INTO departmens(name) VALUES (UPPER('Nariño'));
INSERT INTO departmens(name) VALUES (UPPER('Norte de Santander'));
INSERT INTO departmens(name) VALUES (UPPER('Putumayo'));
INSERT INTO departmens(name) VALUES (UPPER('Quindío'));
INSERT INTO departmens(name) VALUES (UPPER('Risaralda'));
INSERT INTO departmens(name) VALUES (UPPER('San Andrés y Providencia'));
INSERT INTO departmens(name) VALUES (UPPER('Santander'));
INSERT INTO departmens(name) VALUES (UPPER('Sucre'));
INSERT INTO departmens(name) VALUES (UPPER('Tolima'));
INSERT INTO departmens(name) VALUES (UPPER('Valle del Cauca'));
INSERT INTO departmens(name) VALUES (UPPER('Vaupés'));
INSERT INTO departmens(name) VALUES (UPPER('Vichada'));

INSERT INTO cities(name,id_department) VALUES (UPPER('EL ENCANTO'),(SELECT id FROM departmens WHERE name = 'AMAZONAS'));
INSERT INTO cities(name,id_department) VALUES (UPPER('LA CHORRERA'),(SELECT id FROM departmens WHERE name = 'AMAZONAS'));
INSERT INTO cities(name,id_department) VALUES (UPPER('LA PEDRERA'),(SELECT id FROM departmens WHERE name = 'AMAZONAS'));
INSERT INTO cities(name,id_department) VALUES (UPPER('LA VICTORIA'),(SELECT id FROM departmens WHERE name = 'AMAZONAS'));
INSERT INTO cities(name,id_department) VALUES (UPPER('LETICIA'),(SELECT id FROM departmens WHERE name = 'AMAZONAS'));
INSERT INTO cities(name,id_department) VALUES (UPPER('MIRITI - PARANÁ'),(SELECT id FROM departmens WHERE name = 'AMAZONAS'));
INSERT INTO cities(name,id_department) VALUES (UPPER('PUERTO ALEGRIA'),(SELECT id FROM departmens WHERE name = 'AMAZONAS'));
INSERT INTO cities(name,id_department) VALUES (UPPER('PUERTO ARICA'),(SELECT id FROM departmens WHERE name = 'AMAZONAS'));
INSERT INTO cities(name,id_department) VALUES (UPPER('PUERTO NARIÑO'),(SELECT id FROM departmens WHERE name = 'AMAZONAS'));
INSERT INTO cities(name,id_department) VALUES (UPPER('PUERTO SANTANDER'),(SELECT id FROM departmens WHERE name = 'AMAZONAS'));
INSERT INTO cities(name,id_department) VALUES (UPPER('TARAPACÁ'),(SELECT id FROM departmens WHERE name = 'AMAZONAS'));
