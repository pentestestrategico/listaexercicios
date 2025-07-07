"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FuncionarioOp = void 0;
const funcionario_1 = require("./funcionario");
class FuncionarioOp extends funcionario_1.Funcionario {
    constructor(nome, salarioBase, horasExtras) {
        super(nome, salarioBase);
        this.horasExtras = horasExtras;
    }
    calcularSalario() {
        return this.salarioBase + (this.horasExtras * 20);
    }
}
exports.FuncionarioOp = FuncionarioOp;
