// Classe abstrata Animal com atributos e método abstrato
abstract class Animal {
  constructor(
    public nome: string,
    public raca: string,
    public cor: string
  ) {}

  // Método abstrato a ser implementado pelas subclasses
  abstract comer(): void;
}

export default Animal;
