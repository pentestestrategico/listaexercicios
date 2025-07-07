import { Veiculos } from "./veiculos";

export class Moto extends Veiculos {
    ligar():void{
        console.log(`${this.marca}, ${this.modelo} Está ligada com ronco alto.`)
    }

}