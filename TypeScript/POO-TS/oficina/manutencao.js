"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Manutencao = void 0;
class Manutencao {
    constructor(data, hora, servico) {
        this.data = data;
        this.hora = hora;
        this.servico = servico;
    }
    //metodos prorpios pra inseção dos valores nos atributos - GET (visualizar e SET (inserir)
    //SET
    dataSet(data) {
        this.data = data;
    }
    horaSet(hora) {
        this.hora = hora;
    }
    servicoSet(servico) {
        this.servico = servico;
    }
    //GET
    exibirData() {
        console.log(`Data: ${this.data}`);
    }
    exibirHora() {
        console.log(`Hora: ${this.hora}`);
    }
    exibirServico() {
        return `Servico: ${this.servico}`;
    }
    exibirTudo() {
        return `Data:${this.data} - Hora: ${this.hora} - Serviço: ${this.servico}} `;
    }
}
exports.Manutencao = Manutencao;
