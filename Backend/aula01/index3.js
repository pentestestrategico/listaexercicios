const express = require('express');

//body-parse  - pra lidar com o corpo da requisição
const bodyParser = require('body-parser');
const bd = require('./bd'); // Importando a conexão com o banco de dados
const app = express();
const PORT = 3006;

app.use(bodyParser.json());

//visualizar dados da tabela -GET
app.get("/pessoa", (req, res) => {
    // Aqui você pode adicionar a lógica para buscar os dados da tabela pessoa
    const sql = "SELECT * FROM pessoa";
    bd.query(sql, (erro, resultado) => {
        if(erro) return res.status(500).json({ error: 'Erro ao buscar dados' });
        res.json(resultado);
    });
});
// inserir dados na tabela -POST
app.post("/pessoa", (req, res) => {
    const { nome, sexo } = req.body; // Obtendo os dados do corpo da requisição
    const sql = "INSERT INTO pessoa (nome, sexo) VALUES (?, ?)";// ?? protege contra SQL Injection
        bd.query(sql, [nome, sexo], (erro, resultado) => {
        if(erro) return res.status(500).json({ error: 'Erro ao inserir dados' });
        res.status(201).json({ mensagem:` Pessoa inserida com sucesso!`, id: resultado.insertId });
    });
});
// atualizar dados na tabela -PUT
app.put("/pessoa/:id", (req, res) => {
    const { id } = req.params;
    const { nome, sexo } = req.body;
    const sql = "UPDATE pessoa SET nome = ?, sexo = ? WHERE id = ?";
    bd.query(sql, [nome, sexo, id], (erro, resultado) => {
        if(erro) return res.status(500).json({ error: 'Erro ao atualizar dados' });
        res.json({ mensagem: 'Dados atualizados com sucesso!' });
    });
});
// deletar dados na tabela -DELETE
app.delete("/pessoa/:id", (req, res) => {
    const { id } = req.params;
    const sql = "DELETE FROM pessoa WHERE id = ?";
    bd.query(sql, [id], (erro, resultado) => {
        if(erro) return res.status(500).json({ error: 'Erro ao deletar dados' });
        res.json({ mensagem: 'Dados deletados com sucesso!' });
    });
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
