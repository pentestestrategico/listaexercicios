# Rotas App - Exercício Angular

Este projeto é um exercício prático de Angular, desenvolvido para treinar conceitos fundamentais do framework, como componentes, serviços, rotas e manipulação de estado.

## Sobre o Projeto

O objetivo do projeto é criar uma aplicação de contador com diferentes abordagens:
- Contador simples (imutável e mutável)
- Contador utilizando serviços para compartilhamento de estado
- Demonstração de componentes independentes

A aplicação permite incrementar, decrementar e zerar o valor do contador, mostrando como o Angular gerencia dados e interações entre componentes.

## Tecnologias Utilizadas

- **Angular** (v16+)
- **TypeScript**
- **HTML5**
- **CSS3**

## Estrutura do Projeto

- `src/app/componente/contador01` — Contador simples
- `src/app/componente/contador02` — Contador com abordagem imutável/mutável
- `src/app/componente/contador03` — Outro exemplo de contador
- `src/app/componente/contador04` — Contador utilizando serviço compartilhado
- `src/app/contador.service.ts` — Serviço para gerenciamento do estado do contador

---

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
