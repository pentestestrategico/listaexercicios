"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const gato_1 = require("./gato");
const cachorro_1 = require("./cachorro");
// estancia do objeto - Classe Gato
const cat = new gato_1.Gato('Mimi', 2, 'Siamês', 'Branco');
cat.fazerSom();
cat.comer();
console.log(cat.getCorPelo());
// estancia da classe Cachorro
const dog = new cachorro_1.Cachorro('Rex', 4, 'Labrador', 'Preto');
dog.fazerSom();
dog.comer();
console.log(dog.getCorPelo());
