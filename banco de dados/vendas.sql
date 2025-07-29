create database vendedor;
use vendedor;
CREATE TABLE vendas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    produto VARCHAR(50),
    categoria VARCHAR(50),
    quantidade INT,
    valor_unitario DECIMAL(10,2)
);
INSERT INTO vendas (produto, categoria, quantidade, valor_unitario) VALUES
('Arroz', 'Alimentos', 10, 4.50),
('Feijão', 'Alimentos', 5, 5.00),
('Arroz', 'Alimentos', 7, 4.50),
('Macarrão', 'Alimentos', 3, 3.20),
('Detergente', 'Limpeza', 4, 2.10),
('Sabão', 'Limpeza', 2, 3.50),
('Feijão', 'Alimentos', 2, 5.00);

-- Agrupar os dados por categoria, mostrando:
-- total de produtos vendidos por categoria
-- valor total arrecadado por categoria


select categoria,
sum(quantidade * valor_unitario) as TotalArrecadação
from vendas group by categoria;














