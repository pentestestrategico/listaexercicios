export abstract class Veiculos{
    //atributos
    //constritor padrao

    constructor (public marca:string, public modelo:string, public ano:number){


    }
    abstract ligar():void;
    exibirInformações():string{
        return `Marca: ${this.marca}, Modelo: ${this.modelo}, Ano: ${this.ano}`
    }

}