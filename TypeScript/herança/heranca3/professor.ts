import { Pessoas } from "./pessoas";

export class Professor extends Pessoas {

    public registrarProfessor(id:number, nome:string, idade:number):void{
        this.setId(id)
        this.setNome(nome)

        const idadeValida = this.setIdade(idade)
        if(!idadeValida){
            console.log(`Professor com menos de 18 anos!, cadastro acima de 18 anos`)
        }else{
            console.log(`Professor registrado com sucesso!`)
        }

    }
    public exibirProfessor():void{
        console.log(`Professor - ID:${this.getId()}, nome: ${this.getNome()}, 
        idade: ${this.getIdade()}`)
    }
}