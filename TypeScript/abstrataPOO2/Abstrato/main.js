"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const funcionarioAdm_1 = require("./funcionarioAdm");
const funcionarioOp_1 = require("./funcionarioOp");
const funcOperacional = new funcionarioOp_1.FuncionarioOp('maria', 3000, 500);
const funcAdministrativo = new funcionarioAdm_1.FuncionarioAdm('Celso', 2500, 10);
const funcionarios = [funcAdministrativo, funcOperacional];
for (const funcionario of funcionarios) {
    console.log(`Salario final: R$ ${funcionario.calcularSalario().toFixed(2)}\n`);
}
