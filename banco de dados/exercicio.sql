create database Colegio;
use Colegio;
create table Aluno(
idAluno int primary key auto_increment,
nome varchar(60),
idade int
);
create table Turma(
idTurma int primary key auto_increment,
dataInicio date,
idAluno int 
);