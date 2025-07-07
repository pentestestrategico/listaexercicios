"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Funcionario = void 0;
class Funcionario {
    constructor(nome, salarioBase) {
        this.nome = nome;
        this.salarioBase = salarioBase;
    }
    exibirDados() {
        console.log('Nome: ${this.nome}, salario base: ${this.salarioBase.toFixed(2)}');
    }
}
exports.Funcionario = Funcionario;
