import { Veiculos } from "./veiculos"

export class Carro extends Veiculos{

    ligar():void{
        console.log(`${this.marca}, ${this.modelo} Está ligado com motor silencioso`)
    }

}