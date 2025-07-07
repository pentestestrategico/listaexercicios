import { Carro } from "./Carro";

export class Conserto extends Carro {
  private preco: number;
  private data: string;

  constructor(id: string, nome: string, marca: string, ano: string, preco: number, data: string) {
    super(id, nome, marca, ano); // Chamada ao construtor da classe pai
    this.preco = preco;
    this.data = data;
  }

  // metodo get
  public getPreco(): number {
    return this.preco;
  }

  public getData(): string {
    return this.data;
  }

  // metodo set
  public setPreco(preco: number): void {
    this.preco = preco;
  }

  public setData(data: string): void {
    this.data = data;
  }

  // Override do método ExibirVeiculo
  public override ExibirVeiculo(): void {
    super.ExibirVeiculo();
    console.log(`Preço do conserto: R$ ${this.preco.toFixed(2)} - Data: ${this.data}`);
  }
}
