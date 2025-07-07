export class CalculadoraSimples {
  somar(a: number, b: number): number {
    return a + b;
  }

  subtrair(a: number, b: number): number {
    return a - b;
  }

  multiplicar(a: number, b: number): number {
    return a * b;
  }

  dividir(a: number, b: number): number {
    if (b === 0) {
      throw new Error("Não é possível dividir por zero.");
    }
    return a / b;
  }

  potencia(base: number, expoente: number): number {
    return Math.pow(base, expoente);
  }

  gerarMensagem(resultado: number): string {
    return `Resultado: ${resultado}`;
  }

  exibirMensagem(mensagem: string): void {
    console.log(mensagem);
  }
}
