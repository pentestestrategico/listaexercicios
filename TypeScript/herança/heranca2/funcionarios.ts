import { Pessoas } from "./pessoas";

export class Funcionario extends Pessoas{
    private matricula:number

    constructor(codigo:number, nome:string, rg:string, m:number){
        super(codigo, nome, rg)
        this.matricula = m
    }
    public override mostrarString():void{
        console.log(`O nome do funconario é: ${this.getNome()}`)
    }



}