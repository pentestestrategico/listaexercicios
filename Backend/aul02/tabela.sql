CREATE DATABASE cadastro;
USE cadastro;

CREATE TABLE cliente (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100),
    cpf VARCHAR(11)
);

INSERT INTO cliente (nome, cpf) VALUES ('Ana Souza', '12345678901');
INSERT INTO cliente (nome, cpf) VALUES ('Bruno Lima', '23456789012');
INSERT INTO cliente (nome, cpf) VALUES ('Carla Mendes', '34567890123');
INSERT INTO cliente (nome, cpf) VALUES ('Diego Oliveira', '45678901234');
INSERT INTO cliente (nome, cpf) VALUES ('Eduarda Castro', '56789012345');

