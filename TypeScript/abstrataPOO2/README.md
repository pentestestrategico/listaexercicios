# Projeto: Exercício de POO Abstrata em TypeScript

## Descrição
Este projeto é um exercício prático de Programação Orientada a Objetos (POO) utilizando TypeScript. O objetivo é demonstrar o uso de classes abstratas, herança e polimorfismo para modelar diferentes tipos de funcionários em uma empresa.

O sistema define uma classe abstrata `Funcionario` e duas subclasses concretas: `FuncionarioAdm` (funcionário administrativo) e `FuncionarioOp` (funcionário operacional). Cada tipo de funcionário possui regras específicas para o cálculo do salário final, ilustrando o conceito de métodos abstratos e sobrescritos.

## Tecnologias Utilizadas
- **TypeScript**: Linguagem principal do projeto, aproveitando recursos de tipagem estática e POO.
- **Node.js**: Para execução do código JavaScript gerado após a transpilação.

## Estrutura do Projeto
- `funcionario.ts`: Classe abstrata base para funcionários.
- `funcionarioAdm.ts`: Implementação para funcionários administrativos.
- `funcionarioOp.ts`: Implementação para funcionários operacionais.
- `main.ts`: Script principal para instanciar objetos e exibir o cálculo dos salários.
- `tsconfig.json`: Configuração do compilador TypeScript.
- `Abstrato/`: Pasta com arquivos JavaScript transpilados.

## Como Executar
1. Instale o TypeScript globalmente (caso não tenha):
   ```
   npm install -g typescript
   ```
2. Compile o projeto:
   ```
   tsc
   ```
3. Execute o arquivo `main.js` gerado na pasta `Abstrato`:
   ```
   node Abstrato/main.js
   ```

## Objetivo do Exercício
O exercício visa fixar os conceitos de:
- Classes e métodos abstratos
- Herança
- Polimorfismo
- Organização de código orientado a objetos em TypeScript

Ideal para quem está estudando POO e deseja praticar com exemplos práticos em TypeScript.
