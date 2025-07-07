import { Funcionario } from "./funcionario";
import { FuncionarioAdm } from "./funcionarioAdm";
import { FuncionarioOp } from "./funcionarioOp";

const funcOperacional = new FuncionarioOp('maria', 3000, 500)
const funcAdministrativo = new FuncionarioAdm('Celso', 2500, 10)

const funcionarios:Funcionario[] = [funcAdministrativo, funcOperacional]

for(const funcionario of funcionarios){
    console.log(`Salario final: R$ ${funcionario.calcularSalario().toFixed(2)}\n`)
}



