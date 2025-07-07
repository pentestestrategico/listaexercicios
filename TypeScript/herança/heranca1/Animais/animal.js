"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Animal = void 0;
class Animal {
    //método construtor - inicializar os atributos
    constructor(n, idade, raca) {
        this.nome = n;
        this.idade = idade;
        this.raca = raca;
    }
    //método get - visualizar
    getNome() {
        return this.nome;
    }
    //método set - inserir valores ao atributo
    //void - métodos que não tem retornos (return)
    setNome(nome) {
        this.nome = nome;
    }
    // ---------------------
    //método get - visualizar
    getIdade() {
        return this.idade;
    }
    //método set - inserir valores ao atributo
    //void - métodos que não tem retornos (return)
    setIdade(idade) {
        this.idade = idade;
    }
    // ----------------------------
    //método get - visualizar
    getRaca() {
        return this.raca;
    }
    //método set - inserir valores ao atributo
    //void - métodos que não tem retornos (return)
    setRaca(raca) {
        this.raca = raca;
    }
    // -------------outro métodos-------------
    // método comuma todas as classes
    comer() {
        console.log(`${this.nome} está comendo.`);
    }
    // método polifórmico: será sobrescrito nas classes filhas
    fazerSom() {
        console.log(`${this.nome} está fazendo um som!`);
    }
}
exports.Animal = Animal;
