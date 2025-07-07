export abstract class Funcionario{


    constructor(public nome:string, public salarioBase:number){


    }
    exibirDados():void{
        console.log('Nome: ${this.nome}, salario base: ${this.salarioBase.toFixed(2)}')
        
    }
    abstract calcularSalario():number
}