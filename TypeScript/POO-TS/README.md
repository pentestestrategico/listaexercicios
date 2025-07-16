# Projeto POO-TS

Este projeto é um exercício prático de Programação Orientada a Objetos (POO) utilizando TypeScript. O objetivo é aplicar conceitos fundamentais de POO, como classes, herança, encapsulamento e métodos, em um contexto realista relacionado à manutenção de carros.

## Sobre o Exercício
O exercício simula um sistema de manutenção de veículos, onde há classes que representam carros e operações de manutenção. O projeto está dividido em arquivos TypeScript, que são posteriormente compilados para JavaScript.

### Funcionalidades principais
- Definição da classe `Carro` com propriedades e métodos relacionados a um veículo.
- Implementação de funcionalidades de manutenção em `manutencao.ts`.
- Execução do fluxo principal no arquivo `main.ts`.

## Tecnologias Utilizadas
- **TypeScript**: Linguagem principal do projeto, trazendo tipagem estática e recursos modernos para o JavaScript.
- **Node.js**: Utilizado para executar os arquivos JavaScript gerados após a compilação.

## Estrutura do Projeto
```
carro.ts           # Classe e lógica do carro
manutencao.ts      # Funções e classes de manutenção
main.ts            # Execução principal do sistema
tsconfig.json      # Configuração do TypeScript
oficina/           # Arquivos JavaScript compilados
```

## Como Executar
1. Instale o TypeScript globalmente (caso não tenha):
   ```
   npm install -g typescript
   ```
2. Compile os arquivos TypeScript:
   ```
   tsc
   ```
3. Execute o arquivo principal:
   ```
   node oficina/main.js
   ```

---

Este projeto é ideal para quem está aprendendo POO com TypeScript e deseja praticar conceitos fundamentais em um cenário prático.
