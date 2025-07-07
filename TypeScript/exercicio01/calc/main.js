"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const calculadora_1 = require("./calculadora");
// estancia de classe
const calc = new calculadora_1.CalculadoraSimples();
// operação soma
const resultado = calc.somar(2, 2);
const mensagemSoma = calc.gerarMensagem(resultado);
calc.exibirMensagem(mensagemSoma);
console.log("O resultado da soma: " + calc.somar(2, 2));
