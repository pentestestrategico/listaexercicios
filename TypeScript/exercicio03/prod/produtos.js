"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Produtos = void 0;
class Produtos {
    constructor(codigo, nome, preco) {
        this.codigo = codigo;
        this.nome = nome;
        this.preco = preco;
    }
    // metodos SET PRA INSERIR OS ATRIBUTOS
    setCodigo(codigo) {
        this.codigo = codigo;
    }
    setNome(nome) {
        this.nome = nome;
    }
    setPreco(preco) {
        this.preco = preco;
    }
    // METODO GET PRA VISUALIZAR OS ATRIBUTOS
    getCodigo() {
        return this.codigo;
    }
    getNome() {
        return this.nome;
    }
    getPreco() {
        return this.preco;
    }
}
exports.Produtos = Produtos;
