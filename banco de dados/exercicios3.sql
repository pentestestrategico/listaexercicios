CREATE DATABASE empresa2;
USE empresa2;
-- Tabela Fornecedor
CREATE TABLE Fornecedor (
id_fornecedor INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(100) NOT NULL,
telefone VARCHAR(15),
email VARCHAR(100),
cidade VARCHAR(50)
);
-- Tabela Cliente
CREATE TABLE Cliente (
id_cliente INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(100) NOT NULL,
telefone VARCHAR(15),
email VARCHAR(100),
data_nascimento DATE
);
-- Tabela Produto
CREATE TABLE Produto (
id_produto INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(100) NOT NULL,
preco DECIMAL(10,2) NOT NULL,
estoque INT NOT NULL,
id_fornecedor INT,
FOREIGN KEY (id_fornecedor) REFERENCES Fornecedor(id_fornecedor)
);
-- Tabela Pedido
CREATE TABLE Pedido (
id_pedido INT PRIMARY KEY AUTO_INCREMENT,
id_cliente INT,
id_produto INT,
data_pedido DATE NOT NULL,
quantidade INT NOT NULL,
FOREIGN KEY (id_cliente) REFERENCES Cliente(id_cliente),
FOREIGN KEY (id_produto) REFERENCES Produto(id_produto)
);
-- Inserindo registros Tabela Fornecedor
INSERT INTO Fornecedor (nome, telefone, email, cidade) VALUES
('Fornecedor A', '1111-1111', 'contatoA@fornec.com', 'São Paulo'),
('Fornecedor B', '2222-2222', 'contatoB@fornec.com', 'Rio de Janeiro'),
('Fornecedor C', '3333-3333', 'contatoC@fornec.com', 'Belo Horizonte'),
('Fornecedor D', '4444-4444', 'contatoD@fornec.com', 'Curitiba'),
('Fornecedor E', '5555-5555', 'contatoE@fornec.com', 'Fortaleza'),
('Fornecedor F', '6666-6666', 'contatoF@fornec.com', 'Recife');
-- Inserindo registros Tabela Cliente
INSERT INTO Cliente (nome, telefone, email, data_nascimento) VALUES
('Alice Silva', '1234-5678', 'alice@cliente.com', '1985-02-10'),
('Bruno Costa', '2345-6789', 'bruno@cliente.com', '1990-05-20'),
('Carla Dias', '3456-7890', 'carla@cliente.com', '1978-08-15'),
('Daniela Lima', '4567-8901', 'daniela@cliente.com', '1992-11-05'),
('Eduardo Rocha', '5678-9012', 'eduardo@cliente.com', '1980-12-25'),
('Fernanda Souza', '6789-0123', 'fernanda@cliente.com', '1988-07-30');
-- Inserindo registros Tabela Produto
INSERT INTO Produto (nome, preco, estoque, id_fornecedor) VALUES
('Notebook', 3000.00, 20, 1),
('Impressora', 800.00, 15, 2),
('Mouse', 50.00, 100, 3),
('Teclado', 70.00, 80, 4),
('Monitor', 1200.00, 25, 5),
('Headset', 150.00, 50, 6);
-- Inserindo registros Tabela Pedido
INSERT INTO Pedido (id_cliente, id_produto, data_pedido, quantidade) VALUES
(1, 1, '2023-05-10', 2),
(2, 3, '2023-05-11', 5),
(3, 2, '2023-05-12', 1),
(4, 4, '2023-05-13', 3),
(5, 5, '2023-05-14', 2),
(6, 6, '2023-05-15', 4);

-- Exercício 1 – Seleção e Ordenação
-- Objetivo: Listar todos os clientes ordenados por nome em ordem crescente.
select * from cliente order by nome asc;

-- Exercício 2 – Condição de Comparação
-- Objetivo: Listar os produtos com preço maior que 1000, ordenados pelo preço em ordem decrescente.
SELECT * FROM Produto WHERE preco > 1000 ORDER BY preco DESC;

-- Exercício 3 – Uso do BETWEEN
-- Objetivo: Selecionar os pedidos realizados entre as datas '2023-05-11' e '2023-05-14'.
SELECT * FROM Pedido WHERE data_pedido BETWEEN '2023-05-11' AND '2023-05-14';

-- Exercício 4 – Uso do LIKE
-- Objetivo: Listar os clientes cujo e-mail contenha o domínio "cliente.com".
SELECT * FROM Cliente WHERE email LIKE '%cliente.com%';

-- Exercício 5 – Comparação Numérica
-- Objetivo: Selecionar os produtos cujo estoque seja inferior a 50 unidades.
SELECT * FROM Produto WHERE estoque < 50;

-- Exercício 6 – Uso do IS NULL
-- Objetivo: Listar os fornecedores que não possuem telefone cadastrado. (Observação: Se não houver registros com telefone NULL, o exercício serve para demonstrar o uso do IS NULL.)
SELECT * FROM Fornecedor WHERE telefone IS NULL;

-- Exercício 7 – Na tabela produto acrescente mais 100 no preço dos produtos e exiba em uma nova coluna com cabeçalho "Reajuste"
-- Objetivo: Apresentar valores atuais e com reajuste na consulta
SELECT nome, preco, preco + 100 AS Reajuste FROM Produto;

-- Exercício 8 – Operadores Lógicos (AND e OR)
-- Objetivo: Selecionar os clientes cujo nome comece com 'A' ou cujo telefone seja '2345-6789'.
SELECT * FROM Cliente WHERE nome LIKE 'A%' OR telefone = '2345-6789';

-- Exercício 9 – Operadores de Comparação com BETWEEN
-- Objetivo: Selecionar os produtos com preço entre 100 e 1500.
SELECT * FROM Produto WHERE preco BETWEEN 100 AND 1500;

-- Exercício 10 – Mostre todos os e-mails com a palavra "cliente" no corpo do e-mail e coloque em ordem decrescente.
-- Objetivo: Listar valores de texto específicos em um determinado campo da tabela.
SELECT email FROM Cliente WHERE email LIKE '%cliente%' ORDER BY email DESC;

-- Exercício 11 – Seleção com condições compostas e ordenação
-- Objetivo: Listar os clientes que nasceram antes de 1990 e cujo nome contenha a letra "a" (em qualquer posição), ordenando os resultados pela data de nascimento em ordem decrescente.
SELECT * FROM Cliente WHERE data_nascimento < '1990-01-01' AND nome LIKE '%a%' ORDER BY data_nascimento DESC;

-- Exercício 12 – Seleção com condições lógicas e LIKE
-- Objetivo: Listar os fornecedores cuja cidade seja "São Paulo" ou "Rio de Janeiro" e cujo e-mail contenha a palavra "fornec", ordenando-os pelo nome em ordem crescente.
SELECT * FROM Fornecedor WHERE (cidade = 'São Paulo' OR cidade = 'Rio de Janeiro') AND email LIKE '%fornec%' ORDER BY nome ASC;

-- Exercício 13 – Uso de operadores aritméticos e comparação
-- Objetivo: Exibir os produtos cujo valor total em estoque (calculado como preço * estoque) seja maior que 5000, mostrando também esse valor, e ordenando os resultados de forma decrescente.
SELECT nome, preco, estoque, (preco * estoque) AS valor_total FROM Produto WHERE (preco * estoque) > 5000 ORDER BY valor_total DESC;

-- Exercício 14 – Seleção com BETWEEN para datas e quantidades
-- Objetivo: Listar os pedidos realizados durante o mês de maio de 2023 cuja quantidade esteja entre 1 e 3 (inclusive), ordenando os resultados pela quantidade em ordem decrescente.
SELECT * FROM Pedido WHERE data_pedido BETWEEN '2023-05-01' AND '2023-05-31' AND quantidade BETWEEN 1 AND 3 ORDER BY quantidade DESC;

-- Exercício 15 – Atualização e seleção usando IS NULL
-- Objetivo: Atualizar o registro do fornecedor "Fornecedor F" para definir o telefone como NULL e, em seguida, listar os fornecedores cujo telefone é NULL.
UPDATE Fornecedor SET telefone = NULL WHERE nome = 'Fornecedor F'; SELECT * FROM Fornecedor WHERE telefone IS NULL;
