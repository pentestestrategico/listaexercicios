"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const carro_1 = require("./carro");
const manutencao_1 = require("./manutencao");
// instancia de classe, iniciar a classe
const car = new carro_1.Carro('Fiat', 'Tempra', 95);
const man = new manutencao_1.Manutencao('20-05-2025', '12:30', 'troca pastilha');
//man.data = "05-02-2025"
//console.log(`a data é: ${man.exibirData} - Hora: ${man.exibirHora} - Serviço:  ${man.exibirServico} `)
man.exibirData();
man.exibirHora();
console.log(man.exibirServico());
