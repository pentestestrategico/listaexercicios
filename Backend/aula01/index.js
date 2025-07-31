const readline = require('readline');
const app = require('express');
// input - output

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question("qual é o seu nome? ", (nome) => {
    console.log(`Olá ${nome}! Bem vindo ao Node.js.`);
    rl.close();
});