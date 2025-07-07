"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const morcego_1 = __importDefault(require("./morcego"));
const baleia_1 = __importDefault(require("./baleia"));
// Criando instâncias das classes e chamando os métodos
const morcego = new morcego_1.default("Batman", "voador", "preto");
const baleia = new baleia_1.default("Willy", "Orca", "preto e branco");
morcego.comer();
baleia.comer();
