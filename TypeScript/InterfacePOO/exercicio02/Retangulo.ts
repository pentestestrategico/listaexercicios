import { FormaGeometrica } from './formaGeometrica';

export class Retangulo implements FormaGeometrica {
  constructor(private altura: number, private largura: number) {}

  calcularArea(): number {
    return this.altura * this.largura;
  }

  calcularPerimetro(): number {
    return 2 * (this.altura + this.largura);
  }

  exibirValores(): void {
    console.log(`Retângulo -> Altura: ${this.altura}, Largura: ${this.largura}`);
    console.log(`Área: ${this.calcularArea()}`);
    console.log(`Perímetro: ${this.calcularPerimetro()}`);
    console.log('---------------------------');
  }
}
