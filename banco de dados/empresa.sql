create database empresa;
use empresa;

create table departamentos(
	id_departamento int primary key auto_increment,
    nome varchar(100) not null
);
create table funcionarios(
	id_funcionario int primary key auto_increment,
    nome varchar(100) not null,
    cargo varchar(50),
    salario decimal(10,2),
    id_departamento int,
    foreign key(id_departamento) references departamentos(id_departamento)
    );
    create table projetos(
		id_projeto int primary key auto_increment,
        nome varchar(100),
        orcamento decimal(12,2),
        id_departamento int,
        foreign key(id_departamento) references departamentos(id_departamento)
    );
    create table alocacoes(
		id_alocacao int primary key auto_increment,
        id_funcionario int,
        id_projeto int,
        horas_trabalhadas int,
        foreign key(id_funcionario) references funcionarios(id_funcionario),
        foreign key(id_projeto) references projetos(id_projeto)
        );
        
        -- Departamentos
INSERT INTO departamentos (nome) VALUES 
('TI'),
('RH'),
('Financeiro'),
('Marketing');

-- Funcionários
INSERT INTO funcionarios (nome, cargo, salario, id_departamento) VALUES 
('Ana Souza', 'Analista de Sistemas', 4500.00, 1),
('Carlos Lima', 'Recrutador', 3200.00, 2),
('Julia Rocha', 'Contadora', 5000.00, 3),
('Marcos Vinícius', 'Designer', 3900.00, 4);

-- Projetos
INSERT INTO projetos (nome, orcamento, id_departamento) VALUES 
('Sistema ERP', 100000.00, 1),
('Campanha Interna', 15000.00, 2),
('Auditoria Fiscal', 40000.00, 3),
('Redesign Website', 25000.00, 4);

-- Alocações
INSERT INTO alocacoes (id_funcionario, id_projeto, horas_trabalhadas) VALUES 
(1, 1, 120),
(2, 2, 40),
(3, 3, 60),
(4, 4, 80);

select * from funcionarios where nome = 'Carlos Lima';
update funcionarios set salario = 2300.56 where id_funcionario = 4;
select *from projetos where orcamento > 20000 order by orcamento desc;

-- 01 Selecione os campos nome e orçamento da tabela projetos, ordene em ordem decrescente o campo nome
-- 02 mostre o funcionario com salario > 4000, ordenado por nome
-- 03 mostre a quantidade de funcionario por departamento.

select nome, orcamento from projetos order by nome desc;
select nome, salario from funcionarios where salario > 4000 order by nome;

SELECT id_departamento, COUNT(*) AS Total_Funcionarios
FROM funcionarios
GROUP BY id_departamento;

-- alterar tabela (alter table )/ alterar registro(update) --
-- Alterar o salario da Julia
update funcionarios set salario = 6000 where id_funcionario = 3;
select * from funcionarios;
select * from projetos;

-- adicionar add o campo data_inicio na tabela projetos com tipo de dados date

alter table projetos add data_inicio date;
update projetos set data_inicio = '2025-02-12' where id_projeto =1;

-- modificar o tamanho do campo nome da tabela departamentos para varchar(150)

alter table departamentos modify nome varchar(150);

-- corrigir o cargo do Carlos para Analista de sistemas

select * from funcionarios;
update funcionarios set cargo = 'Analista de Sistemas' where id_funcionario = 'Carlos'

-- aumentar o salariod e todos os funcionarios em 10%

select nome, salario, salario * 1.10 as Salário_reajustado
from funcionarios;

-- saber o valor diario recebido do salario de cada funcionario
-- base 22 dias trabalho

select nome, salario, salario / 22 as salario_diario
from funcionarios; 

-- funcioanrio com salarios maiores que 4000
select * from funcionarios where salario > 4000 ;

-- funcionarios com slario > 4000 e do departamento TI
select * from funcionarios where salario > 4000 AND id_departamento = 1;

-- visualizar projetos com orçamento entre 20000 e 50000 e que nao sao do departamento financeiro
select nome, orcamento, id_departamento
from projetos
where orcamento between 20000 and 50000 and id_departamento <> 3;

-- mostre os funcionarios que pertencem ao departamento 1 ou 4

select nome, id_departamento from funcionarios
where id_departamento in(1, 4);








