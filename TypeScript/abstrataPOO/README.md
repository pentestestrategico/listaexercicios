# Projeto: Exercício de Programação Orientada a Objetos com TypeScript

## Descrição
Este projeto consiste em um exercício prático de Programação Orientada a Objetos (POO) utilizando TypeScript. O objetivo é demonstrar conceitos como classes abstratas, herança e polimorfismo através da modelagem de veículos, incluindo carros e motos.

O projeto está organizado em arquivos separados para cada tipo de veículo e um arquivo principal para execução dos exemplos.

## Tecnologias Utilizadas
- **TypeScript**: Linguagem principal utilizada para implementar o exercício, aproveitando recursos de tipagem estática e POO.
- **Node.js**: Utilizado para executar o código JavaScript gerado após a transpilação do TypeScript.

## Estrutura do Projeto
- `veiculos.ts`: Define a classe abstrata base para veículos.
- `carros.ts`: Implementa a classe Carro, herdando de Veículo.
- `motos.ts`: Implementa a classe Moto, herdando de Veículo.
- `main.ts`: Arquivo principal para execução dos exemplos e testes das classes.
- `tsconfig.json`: Configuração do compilador TypeScript.
- `Abstrata/`: Pasta contendo os arquivos JavaScript gerados após a transpilação.

## Como Executar
1. Instale o TypeScript globalmente, se necessário:
   ```
   npm install -g typescript
   ```
2. Compile os arquivos TypeScript:
   ```
   tsc
   ```
3. Execute o arquivo principal:
   ```
   node Abstrata/main.js
   ```

## Objetivo do Exercício
O exercício visa fixar os conceitos de:
- Criação de classes abstratas
- Herança entre classes
- Implementação de métodos abstratos
- Polimorfismo

A modelagem de veículos serve como exemplo prático para aplicar esses conceitos, tornando o aprendizado mais didático e próximo de situações reais de desenvolvimento.
