"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Conserto = void 0;
const Carro_1 = require("./Carro");
class Conserto extends Carro_1.Carro {
    constructor(id, nome, marca, ano, preco, data) {
        super(id, nome, marca, ano); // Chamada ao construtor da classe pai
        this.preco = preco;
        this.data = data;
    }
    // metodo get
    getPreco() {
        return this.preco;
    }
    getData() {
        return this.data;
    }
    // metodo set
    setPreco(preco) {
        this.preco = preco;
    }
    setData(data) {
        this.data = data;
    }
    // Override do método ExibirVeiculo
    ExibirVeiculo() {
        super.ExibirVeiculo();
        console.log(`Preço do conserto: R$ ${this.preco.toFixed(2)} - Data: ${this.data}`);
    }
}
exports.Conserto = Conserto;
