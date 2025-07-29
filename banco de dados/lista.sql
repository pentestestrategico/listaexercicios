-- Consultas com JOIN

create database lista;
use lista;

create table TabelaA(
	nome varchar(50)
);

create table TabelaB(
	nome varchar(50)
);

insert into TabelaA values('Fernanda');
insert into TabelaA values('Josefa');
insert into TabelaA values('Luiz');
insert into TabelaA values('Fernando');

insert into TabelaB values('Carlos');
insert into TabelaB values('Manoel');
insert into TabelaB values('Luiz');
insert into TabelaB values('Fernando');

---------------------------------------------------------------------------------------------------------------------------------------------------
-- Criar banco de dados
CREATE DATABASE colegio;
USE colegio;

-- Tabela Aluno
CREATE TABLE Aluno (
    id_aluno INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100),
    idade INT
);

-- Tabela Curso
CREATE TABLE Curso (
    id_curso INT PRIMARY KEY AUTO_INCREMENT,
    nome_curso VARCHAR(100)
);

-- Tabela Matricula (relacionamento entre Aluno e Curso)
CREATE TABLE Matricula (
    id_matricula INT PRIMARY KEY AUTO_INCREMENT,
    id_aluno INT,
    id_curso INT,
    ano_letivo INT,
    FOREIGN KEY (id_aluno) REFERENCES Aluno(id_aluno),
    FOREIGN KEY (id_curso) REFERENCES Curso(id_curso)
);
-- inserir dados
-- Inserir Alunos
INSERT INTO Aluno (nome, idade) VALUES 
('João Silva', 15),
('Maria Oliveira', 16),
('Carlos Souza', 17);  -- Este aluno não será matriculado (para testar LEFT JOIN)

-- Inserir Cursos
INSERT INTO Curso (nome_curso) VALUES 
('Matemática'),
('História'),
('Biologia');  -- Este curso ficará sem alunos (para testar RIGHT JOIN)

-- Inserir Matrículas
INSERT INTO Matricula (id_aluno, id_curso, ano_letivo) VALUES
(1, 1, 2024),  -- João em Matemática
(1, 2, 2024),  -- João em História
(2, 1, 2024);  -- Maria em Matemática

-- ---------------------------------------------------------------------------------------------------------------------------
-- consultas cm join
select a.nome as tabelaA, b.nome as tabelaB from tabelaA as A inner join tabelaB as B on a.nome = b.nome;

-- consulta left join
select a.nome as tabelaA, b.nome as tabelaB from tabelaA as A left join tabelaB as B on a.nome = b.nome;

-- consulta juntando os 2
SELECT a.nome AS tabelaA, b.nome AS tabelaB FROM tabelaA AS a RIGHT JOIN tabelaB AS b ON a.nome = b.nome UNION SELECT a.nome AS tabelaA, b.nome AS tabelaB FROM tabelaA AS a LEFT JOIN tabelaB AS b ON a.nome = b.nome;

-- retorne todos os registros que estão na tabela A e que não estejam na tabela B

select a.nome, b.nome from tabelaA as A left join tabelaB as B on a.nome =b.nome where b.nome is null;


