const express = require('express');
const app = express();

//mapear uma rota home
app.get("/", (req, res) => {
    res.send('Hello World!');
});

app.get("/sobre", (req, res) => {
    res.send('Sobre a aplicação');
});

app.get("/json", (req, res) => {
    res.json({ message: 'esta rota retorna um JSON' });
});

app.get("/saudacao/:nome/:idade", (req, res) => {
    const nome = req.params.nome;
    const idade = req.params.idade;
     res.json({ message: `Olá ${nome}, você tem ${idade} anos!` });
});

const PORT = 3005

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
