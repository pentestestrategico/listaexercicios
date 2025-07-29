CREATE DATABASE IF NOT EXISTS empresa3;
USE empresa3;

-- Tabela de Funcionários
CREATE TABLE funcionarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100),
    cargo VARCHAR(50)
);

-- Tabela de Departamentos
CREATE TABLE departamentos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100)
);

-- Tabela de Projetos (relaciona funcionários e departamentos)
CREATE TABLE projetos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(100),
    data_inicio date,
    id_funcionario INT,
    id_departamento INT,
    FOREIGN KEY (id_funcionario) REFERENCES funcionarios(id),
    FOREIGN KEY (id_departamento) REFERENCES departamentos(id)
);
-- ----------------------------------------inserir------------------------------------------------------------------------------------
-- Inserindo funcionários
INSERT INTO funcionarios (nome, cargo) VALUES
('Ana Silva', 'Analista'),
('Carlos Souza', 'Desenvolvedor'),
('Beatriz Lima', 'Gerente'),
('João Pedro', 'Designer');

-- Inserindo departamentos
INSERT INTO departamentos (nome) VALUES
('TI'),
('Marketing'),
('Financeiro'),
('RH');

-- Inserindo projetos
INSERT INTO projetos (titulo, data_inicio, id_funcionario, id_departamento) VALUES
('Sistema Interno', '2020-05-20', 1, 1),
('Campanha Digital', '2025-05-03', 4, 2),
('Controle Financeiro', '2010-12-20', 2, 3),
('Portal RH', '2025-06-12', 3, 4);

-- mostrar todos os projetos e ano em que cada um começou
select titulo, data_inicio, year(data_inicio) as AnoInicio from projetos;
-- mostrar os anos acima de 2024
select titulo, data_inicio from projetos where year(data_inicio) > 2024;
-- mostrar os projetos cujo a data_inicio é o mesmo ano da data atual
select titulo, data_inicio from projetos where year(data_inicio) = year(curdate());
-- mostrar o cargo em maiusculo e o comprimentodo nome de cada funcionario.
select nome, upper(cargo) as Cargo_em_Maiusculo, length(nome) as Tamanho_caracter from funcionarios;

-- subconsultas
-- liste apenas os funcionarios que estao vinculados a algum projetos

select * from departamentos;
select * from funcionarios;
select * from projetos;

select * from funcionarios where id in (select id_funcionario from projetos);

-- apelidos das tabelas - union
select nome from funcionarios as Nome union select nome from departamentos as nome_departamento;

select p.titulo, f.nome from funcionarios f, projetos p where p.id_funcionario = f.id; 
-- mostre o nome do funcionario, departamento e data de inicio do projeto

select
f.nome as Nome,
d.nome as Departamento, 
p.data_inicio as Inicio 
from
funcionarios f, departamentos d, projetos p 
where
f.id = p.id_funcionario
and
p.id_departamento = d.id;

-- nome do funcionario e seu cargo em projetos iniciados antes de 2023
select f.nome, f.cargo, p.titulo from funcionarios f, projetos p
where p.id_funcionario = f.id and p.data_inicio < year('2023');

-- Mostrar os nomes de funcionarios, cargo e data incio
-- mostrar os cargos e departamentos, apenas do departamento RH
select f.nome, f.cargo, p.data_inicio from funcionarios f , projetos p
where f.id = p.id_funcionario;

SELECT f.nome, f.cargo AS Cargo, d.nome AS Departamento
FROM funcionarios f, projetos p, departamentos d
WHERE p.id_funcionario = f.id
  AND p.id_departamento = d.id
  AND d.nome = 'RH';












