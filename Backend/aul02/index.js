const express = require('express');
const conexao = require('./bd'); // Importando a conexão com o banco de dados
const app = express();
const port = 3006;
const bodyParser = require('body-parser');

app.use(bodyParser.json()); // Middleware para analisar o corpo das requisições JSON

// Middleware para servir arquivos estáticos (HTML, CSS, JS)
app.use(express.static('.'));

// Middleware para habilitar CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

//visualizar dados da tabela cliente
app.get('/clientes', (req, res) => {
    conexao.query('SELECT * FROM cliente', (error, results) => {
        if (error) {
            console.error('Erro ao buscar clientes:', error);
            return res.status(500).send('Erro ao buscar clientes');
        }
        res.json(results);
    });
});

//inserir dados na tabela cliente
app.post('/clientes', (req, res) => {
    const { nome, cpf} = req.body;
    const sql = 'INSERT INTO cliente (nome, cpf) VALUES (?, ?)';
    conexao.query(sql, [nome, cpf], (error, results) => {   
        if (error) {
            console.error('Erro ao inserir cliente:', error);
            return res.status(500).send('Erro ao inserir cliente');
        }
        res.status(201).send(`Cliente inserido com ID: ${results.insertId}`);
    });
});

//atualizar dados na tabela cliente
app.put('/clientes/:id', (req, res) => {
    const { id } = req.params;
    const { nome, cpf } = req.body;
    const sql = 'UPDATE cliente SET nome = ?, cpf = ? WHERE id = ?';
    conexao.query(sql, [nome, cpf, id], (error, results) => {
        if (error) {
            console.error('Erro ao atualizar cliente:', error);
            return res.status(500).send('Erro ao atualizar cliente');
        }
        res.send(`Cliente com ID: ${id} atualizado com sucesso`);
    });
});
//deletar dados na tabela cliente
app.delete('/clientes/:id', (req, res) => {
    const { id } = req.params;
    const sql = 'DELETE FROM cliente WHERE id = ?';
    conexao.query(sql, [id], (error, results) => {
        if (error) {
            console.error('Erro ao deletar cliente:', error);
            return res.status(500).send('Erro ao deletar cliente');
        }
        if (results.affectedRows === 0) {
            return res.status(404).send('Cliente não encontrado');
        }
        res.send(`Cliente com ID: ${id} deletado com sucesso`);
    });
});
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
