import { CalculadoraSimples } from "./calculadora"

// estancia de classe
const calc = new CalculadoraSimples()

// operação soma
const resultado = calc.somar(2, 2)
const mensagemSoma = calc.gerarMensagem(resultado)
calc.exibirMensagem(mensagemSoma)

console.log("O resultado da soma: " + calc.somar(2,2))
