"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Carro = void 0;
class Carro {
    constructor(id, nome, marca, ano) {
        this.id = id;
        this.nome = nome;
        this.marca = marca;
        this.ano = ano;
    }
    //metodos GET
    getId() {
        return this.id;
    }
    getNome() {
        return this.nome;
    }
    getMarca() {
        return this.marca;
    }
    getAno() {
        return this.ano;
    }
    // METODOS SET
    setId(id) {
        this.id = id;
    }
    setNome(nome) {
        this.nome = nome;
    }
    setMarca(marca) {
        this.marca = marca;
    }
    setAno(ano) {
        this.ano = ano;
    }
    //metodo pra exibir dados do veiculo
    ExibirVeiculo() {
        console.log(`Codigo: ${this.id} - Nome: ${this.nome} - Marca: ${this.marca} - Ano: ${this.ano}`);
    }
}
exports.Carro = Carro;
