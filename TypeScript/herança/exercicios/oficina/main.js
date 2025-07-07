"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Conserto_1 = require("./Conserto");
// Criando um objeto da classe Conserto
const meuConserto = new Conserto_1.Conserto("1", "Civic", "Honda", "2020", 1200.50, "30/06/2025");
// Exibindo os dados do veículo e do conserto
meuConserto.ExibirVeiculo();
