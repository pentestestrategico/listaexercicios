"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FuncionarioAdm = void 0;
const funcionario_1 = require("./funcionario");
class FuncionarioAdm extends funcionario_1.Funcionario {
    constructor(nome, salarioBase, bonusMensal) {
        super(nome, salarioBase);
        this.bonusMensal = bonusMensal;
    }
    calcularSalario() {
        return this.salarioBase + this.bonusMensal;
    }
}
exports.FuncionarioAdm = FuncionarioAdm;
