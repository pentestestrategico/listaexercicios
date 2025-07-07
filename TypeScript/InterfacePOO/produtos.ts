import { IProduto } from "./interface_prod";

export class Produtos implements IProduto{


    constructor(public id:number, public nome:string, public preco:number){ }
    
    
    obterInformacao(): string {
        return `Id: ${this.id}, Produto: ${this.nome}, Preço: ${this.preco}`
    }
    
    
}