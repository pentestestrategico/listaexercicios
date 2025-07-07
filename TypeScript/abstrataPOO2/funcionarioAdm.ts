import { Funcionario } from "./funcionario";  

export class FuncionarioAdm extends Funcionario{

    constructor(nome:string, salarioBase:number, public bonusMensal:number){
        super(nome,salarioBase)
    }

    calcularSalario(): number {
        return this.salarioBase + this.bonusMensal
        
    }
}