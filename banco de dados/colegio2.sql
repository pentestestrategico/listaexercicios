-- Criar banco de dados
CREATE DATABASE colegioII;
USE colegioII;

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
-- aluno e seus cursos
select a.nome as Nome, c.nome_curso as Curso from Aluno a join Matricula m on a.id_aluno = m.id_aluno join Curso c on c.id_curso = m.id_curso;

-- List todos os alunos com ou sem matricula
SELECT a.nome AS Nome, c.nome_curso AS Curso FROM Aluno a LEFT JOIN Matricula m ON a.id_aluno = m.id_aluno LEFT JOIN Curso c ON c.id_curso = m.id_curso;

SELECT a.nome AS Nome, c.nome_curso AS Curso
FROM Aluno a
LEFT JOIN Matricula m ON a.id_aluno = m.id_aluno
LEFT JOIN Curso c ON c.id_curso = m.id_curso;

-- listar todos os cursos com ou sem aluno matriculado
SELECT c.nome_curso AS Curso, a.nome AS Nome
FROM curso c
LEFT JOIN matricula m ON c.id_curso = m.id_curso
LEFT JOIN aluno a ON a.id_aluno = m.id_aluno;

-- quantidade de cursos por aluno
select a.nome as Nome, count(m.id_curso) as Total_curso
from aluno a
left join matricula m on a.id_aluno = m.id_aluno = m.id_aluno
group by a.id_aluno;


-- liste nome do curso e nome dos alunos e ordenação por nome do curso
SELECT c.nome_curso AS Curso, a.nome AS Aluno
FROM curso c
LEFT JOIN matricula m ON c.id_curso = m.id_curso
LEFT JOIN aluno a ON a.id_aluno = m.id_aluno
ORDER BY c.nome_curso;
-- exemplo de view com a consulta acima
create view curso_aluno as 
SELECT c.nome_curso AS Curso, a.nome AS Aluno
FROM curso c
LEFT JOIN matricula m ON c.id_curso = m.id_curso
LEFT JOIN aluno a ON a.id_aluno = m.id_aluno
ORDER BY c.nome_curso;
-- pra executar a view
select * from curso_aluno;
