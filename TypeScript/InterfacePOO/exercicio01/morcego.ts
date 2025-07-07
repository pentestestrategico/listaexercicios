import Animal from './animal';

// Classe Morcego estende Animal e implementa o método comer
class Morcego extends Animal {
  constructor(nome: string, raca: string, cor: string) {
    super(nome, raca, cor);
  }

  // Implementação específica do método abstrato
  comer(): void {
    console.log(`${this.nome} (morcego) está comendo frutas e insetos.`);
  }
}

export default Morcego;
