"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Carro = void 0;
class Carro {
    //metodos - metodo construtor
    constructor(marca, modelo, ano) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
        this.ligado = false;
    }
    //metodo - ações
    ligar() {
        if (!this.ligado) {
            this.lgado = true;
            console.log(`${this.modelo} ligando carro`);
        }
        else {
            console.log(`${this.modelo} já esta ligado`);
        }
        desligar();
    }
}
exports.Carro = Carro;
