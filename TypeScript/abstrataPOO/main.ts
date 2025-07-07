import { Carro } from "./carros";
import { Moto } from "./motos";

const carro = new Carro('Toyota', 'Corolla', 2022)
const moto = new Moto('Honda','CB 500', 2021)

console.log(carro.exibirInformações())
carro.ligar()

console.log(moto.exibirInformações())
moto.ligar()



