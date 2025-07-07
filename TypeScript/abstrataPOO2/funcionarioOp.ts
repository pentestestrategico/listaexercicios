import { Funcionario } from "./funcionario";  

export class FuncionarioOp extends Funcionario{

    constructor(nome:string, salarioBase:number, public horasExtras:number){
        super(nome,salarioBase)
    }

    calcularSalario(): number {
        return this.salarioBase + (this.horasExtras * 20)
        
    }
}