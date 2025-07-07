import { FormaGeometrica } from './formaGeometrica';

export class Circulo implements FormaGeometrica {
  constructor(private raio: number) {}

  calcularArea(): number {
    return Math.PI * this.raio ** 2;
  }

  calcularPerimetro(): number {
    return 2 * Math.PI * this.raio;
  }

  exibirValores(): void {
    console.log(`Círculo -> Raio: ${this.raio}`);
    console.log(`Área: ${this.calcularArea().toFixed(2)}`);
    console.log(`Perímetro: ${this.calcularPerimetro().toFixed(2)}`);
    console.log('---------------------------');
  }
}
