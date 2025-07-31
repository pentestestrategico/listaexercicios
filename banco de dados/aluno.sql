-- Criar banco de dados
CREATE DATABASE curso;
USE curso;
-- Tabela Aluno
CREATE TABLE Aluno (
id_aluno INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(100)
);
-- Tabela Disciplina
CREATE TABLE Disciplina (
id_disciplina INT PRIMARY KEY AUTO_INCREMENT,
nome_disciplina VARCHAR(100)
);
-- Tabela Inscricao
CREATE TABLE Inscricao (
id_inscricao INT PRIMARY KEY AUTO_INCREMENT,
id_aluno INT,
id_disciplina INT,
FOREIGN KEY (id_aluno) REFERENCES Aluno(id_aluno),
FOREIGN KEY (id_disciplina) REFERENCES Disciplina(id_disciplina)
);
-- Alunos
INSERT INTO Aluno (nome) VALUES
('Alice'),
('Bruno'),
('Carla');
-- Disciplinas
INSERT INTO Disciplina (nome_disciplina) VALUES
('Banco de Dados'),
('Lógica de Programação');
-- Inscrições
INSERT INTO Inscricao (id_aluno, id_disciplina) VALUES
(1, 1), -- Alice em Banco de Dados
(2, 2); -- Bruno em Lógica de Programação
-- Carla não está inscrita em nenhuma disciplina
-- Banco de Dados tem Alice, Lógica tem Bruno

-- 1. JOIN — Mostrar apenas alunos inscritos com os nomes das disciplinas
SELECT a.nome AS Aluno, d.nome_disciplina AS Disciplina
FROM Aluno a
JOIN Inscricao i ON a.id_aluno = i.id_aluno
JOIN Disciplina d ON d.id_disciplina = i.id_disciplina;

-- 2. LEFT JOIN — Mostrar todos os alunos, mesmo os não inscritos
SELECT a.nome AS Aluno, d.nome_disciplina AS Disciplina
FROM Aluno a
left JOIN Inscricao i ON a.id_aluno = i.id_aluno
left JOIN Disciplina d ON d.id_disciplina = i.id_disciplina;

-- 3. RIGHT JOIN — Mostrar todas as disciplinas, mesmo sem alunos
SELECT a.nome AS Aluno, d.nome_disciplina AS Disciplina
FROM Aluno a
right JOIN Inscricao i ON a.id_aluno = i.id_aluno
right JOIN Disciplina d ON d.id_disciplina = i.id_disciplina;

-- 4. LEFT JOIN — Listar nome de cada aluno e sua matrícula (se houver)
SELECT a.nome AS Aluno, i.id_inscricao AS Matricula, d.nome_disciplina AS Disciplina
FROM Aluno a
LEFT JOIN Inscricao i ON a.id_aluno = i.id_aluno
LEFT JOIN Disciplina d ON d.id_disciplina = i.id_disciplina;
 
-- 5. JOIN — Mostrar apenas as disciplinas com alunos inscritos
SELECT d.nome_disciplina AS Disciplina, a.nome AS Aluno
FROM Disciplina d
JOIN Inscricao i ON d.id_disciplina = i.id_disciplina
JOIN Aluno a ON a.id_aluno = i.id_aluno;

-- 6. RIGHT JOIN — Mostrar disciplinas e os nomes de alunos inscritos
SELECT a.nome AS Aluno, d.nome_disciplina AS Disciplina
FROM Aluno a
RIGHT JOIN Inscricao i ON a.id_aluno = i.id_aluno
RIGHT JOIN Disciplina d ON d.id_disciplina = i.id_disciplina;

-- 7. LEFT JOIN com filtro — Mostrar apenas os alunos sem inscrição
SELECT a.nome AS Aluno
FROM Aluno a
LEFT JOIN Inscricao i ON a.id_aluno = i.id_aluno
WHERE i.id_inscricao IS NULL;

-- 8. LEFT JOIN com contagem — Total de disciplinas por aluno
SELECT a.nome AS Aluno, COUNT(i.id_disciplina) AS Total_Disciplinas
FROM Aluno a
LEFT JOIN Inscricao i ON a.id_aluno = i.id_aluno
GROUP BY a.id_aluno, a.nome;



