import { Animal } from "./animal";
export class Gato extends Animal{
     // exclusivo da classe Cachorro
    private corPelo:string

    // construtor
    constructor(nome:string, idade:number, raca:string, corPelo:string){
        super(nome, idade, raca)
        this.corPelo = corPelo
    }
    public getCorPelo():string{
        return this.corPelo
    }
    public setCorPelo(cor:string):void{
        this.corPelo = cor
    }
    // polimorfismo
    public override fazerSom(){
        console.log(`${this.getNome()} diz: Miau!`)
    }
}