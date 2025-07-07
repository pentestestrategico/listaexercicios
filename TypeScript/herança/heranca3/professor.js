"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Professor = void 0;
const pessoas_1 = require("./pessoas");
class Professor extends pessoas_1.Pessoas {
    registrarProfessor(id, nome, idade) {
        this.setId(id);
        this.setNome(nome);
        const idadeValida = this.setIdade(idade);
        if (!idadeValida) {
            console.log(`Professor com menos de 18 anos!, cadastro acima de 18 anos`);
        }
        else {
            console.log(`Professor registrado com sucesso!`);
        }
    }
    exibirProfessor() {
        console.log(`Professor - ID:${this.getId()}, nome: ${this.getNome()}, 
        idade: ${this.getIdade()}`);
    }
}
exports.Professor = Professor;
