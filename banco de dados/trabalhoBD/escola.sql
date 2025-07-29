-- Criação do banco de dados
CREATE DATABASE IF NOT EXISTS escola;
USE escola;

-- Tabela Professor
CREATE TABLE Professor (
    cod_professor INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL
);

-- Tabela Secretaria
CREATE TABLE Secretaria (
    cod_secretaria INT AUTO_INCREMENT PRIMARY KEY
);

-- Tabela Aluno
CREATE TABLE Aluno (
    cod_aluno INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    cpf VARCHAR(14) NOT NULL UNIQUE,
    cod_professor INT,
    FOREIGN KEY (cod_professor) REFERENCES Professor(cod_professor)
);

-- Tabela Mensalidade
CREATE TABLE Mensalidade (
    cod_mensalidade INT AUTO_INCREMENT PRIMARY KEY,
    valor_mensalidade DECIMAL(10,2) NOT NULL,
    cod_aluno INT,
    cod_secretaria INT,
    FOREIGN KEY (cod_aluno) REFERENCES Aluno(cod_aluno),
    FOREIGN KEY (cod_secretaria) REFERENCES Secretaria(cod_secretaria)
);

-- Tabela Efetua_Pagamento (entidade associativa)
CREATE TABLE Efetua_Pagamento (
    id_pagamento INT AUTO_INCREMENT PRIMARY KEY,
    cod_professor INT,
    cod_secretaria INT,
    valor_pago DECIMAL(10,2),
    data_pagamento DATE,
    FOREIGN KEY (cod_professor) REFERENCES Professor(cod_professor),
    FOREIGN KEY (cod_secretaria) REFERENCES Secretaria(cod_secretaria)
);

-- Inserção de dados

-- Professores
INSERT INTO Professor (nome) VALUES 
('Carlos Silva'),
('Ana Paula'),
('Ricardo Gomes'),
('Marina Costa'),
('José Martins'),
('Fernanda Lima'),
('Bruno Souza'),
('Patrícia Alves'),
('Luciana Rocha'),
('Felipe Tavares');

-- Secretaria
INSERT INTO Secretaria (cod_secretaria) VALUES
(NULL),(NULL),(NULL),(NULL),(NULL),(NULL),(NULL),(NULL),(NULL),(NULL);

-- Alunos
INSERT INTO Aluno (nome, cpf, cod_professor) VALUES
('João Pedro', '111.111.111-11', 1),
('Mariana Lima', '222.222.222-22', 2),
('Lucas Rocha', '333.333.333-33', 3),
('Beatriz Souza', '444.444.444-44', 4),
('Rafael Silva', '555.555.555-55', 5),
('Amanda Teixeira', '666.666.666-66', 6),
('Thiago Ramos', '777.777.777-77', 7),
('Carla Mendes', '888.888.888-88', 8),
('Igor Santos', '999.999.999-99', 9),
('Laura Campos', '000.000.000-00', 10);

-- Mensalidades
INSERT INTO Mensalidade (valor_mensalidade, cod_aluno, cod_secretaria) VALUES
(500.00, 1, 1),
(480.00, 2, 2),
(470.00, 3, 3),
(460.00, 4, 4),
(450.00, 5, 5),
(490.00, 6, 6),
(510.00, 7, 7),
(530.00, 8, 8),
(520.00, 9, 9),
(540.00, 10, 10);

-- Pagamentos aos Professores
INSERT INTO Efetua_Pagamento (cod_professor, cod_secretaria, valor_pago, data_pagamento) VALUES
(1, 1, 3000.00, '2025-07-01'),
(2, 2, 2800.00, '2025-07-01'),
(3, 3, 2600.00, '2025-07-01'),
(4, 4, 3100.00, '2025-07-01'),
(5, 5, 2700.00, '2025-07-01'),
(6, 6, 2900.00, '2025-07-01'),
(7, 7, 3000.00, '2025-07-01'),
(8, 8, 3200.00, '2025-07-01'),
(9, 9, 2750.00, '2025-07-01'),
(10, 10, 2950.00, '2025-07-01');
