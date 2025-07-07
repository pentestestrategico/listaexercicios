import Animal from './animal';

// Classe Baleia estende Animal e implementa o método comer
class Baleia extends Animal {
  constructor(nome: string, raca: string, cor: string) {
    super(nome, raca, cor);
  }

  // Implementação específica do método abstrato
  comer(): void {
    console.log(`${this.nome} (baleia) está comendo krill e pequenos peixes.`);
  }
}

export default Baleia;
