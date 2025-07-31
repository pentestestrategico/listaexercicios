//conexão ao banco de dados
const mysql = require('mysql2')
//criar a conexão com o banco de dados
const conexao = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'sistema'
});

conexao.connect((Erro) => {
    if (Erro) {
        console.error('Erro ao conectar ao banco de dados:', Erro);
        return;
    }
    console.log('Conexão ao banco de dados estabelecida com sucesso!');
});
module.exports = conexao;
//exportar a conexão para ser usada em outros arquivos 