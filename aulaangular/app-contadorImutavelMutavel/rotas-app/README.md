# Rotas App - Exercício Angular

Este projeto é um exercício prático de Angular, desenvolvido para treinar conceitos fundamentais do framework, como componentes, serviços, rotas e manipulação de estado.

## Sobre o Projeto

O objetivo do projeto é criar uma aplicação de contador com diferentes abordagens:
- Contador simples (imutável e mutável)
- Contador utilizando serviços para compartilhamento de estado
- Demonstração de componentes independentes

A aplicação permite incrementar, decrementar e zerar o valor do contador, mostrando como o Angular gerencia dados e interações entre componentes.

## Conceitos Abordados

### Contador Imutável vs Mutável

Este exercício demonstra duas abordagens fundamentais para manipulação de estado no Angular:

#### **Contador Mutável** ✏️
- **Conceito**: Modifica diretamente o valor da variável existente
- **Implementação**: `this.contador = this.contador + 1`
- **Características**:
  - Altera o valor na memória
  - Mais eficiente em termos de performance
  - Abordagem tradicional e direta
  - Usado quando o estado é simples e local

#### **Contador Imutável** 🔒
- **Conceito**: Cria um novo valor ao invés de modificar o existente
- **Implementação**: `this.contador = {...this.state, valor: this.state.valor + 1}`
- **Características**:
  - Preserva o estado anterior
  - Facilita o rastreamento de mudanças
  - Melhor para debugging e testes
  - Essencial para gerenciamento de estado complexo (Redux, NgRx)
  - Permite funcionalidades como "desfazer/refazer"

#### **Quando Usar Cada Um?**
- **Mutável**: Estados simples, componentes pequenos, performance crítica
- **Imutável**: Estados complexos, aplicações grandes, quando precisar de histórico de mudanças

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

## Funcionalidades por Componente

### 🔢 Contador01 - Simples
- Implementação básica de contador
- Apenas botão de incremento
- Demonstra binding de dados simples
- Estado local do componente

### 🔄 Contador02 - Imutável/Mutável
- Demonstra as duas abordagens de manipulação de estado
- Botões de incrementar e decrementar
- Comparação prática entre métodos
- Console.log para debug e acompanhamento

### 📊 Contador03 - Exemplo Adicional
- Template preparado para extensões futuras
- Base para novos experimentos
- Estrutura pronta para implementações

### 🔗 Contador04 - Com Serviços
- Utiliza `ContadorService` para estado compartilhado
- Demonstra injeção de dependência
- Estado global acessível por múltiplos componentes
- Botões: incrementar, decrementar e zerar
- Exemplo de arquitetura escalável

## Como Executar

1. Instale as dependências:
   ```bash
   npm install
   ```

2. Inicie o servidor de desenvolvimento:
   ```bash
   ng serve
   ```

3. Acesse a aplicação em [http://localhost:4200](http://localhost:4200)

A aplicação será recarregada automaticamente sempre que você modificar qualquer arquivo fonte.

## Design e Estilização

### 🎨 Interface Moderna
- **Gradiente de fundo**: Transição suave de azul para roxo
- **Cards glassmorphism**: Efeito de vidro fosco com transparência
- **Tipografia elegante**: Segoe UI para melhor legibilidade
- **Layout responsivo**: Adaptável a diferentes tamanhos de tela

### 🎯 Botões Interativos
- **Incrementar**: Verde com gradiente, indica ação positiva
- **Decrementar**: Vermelho/rosa, indica ação de redução
- **Zerar**: Azul/roxo, ação neutra de reset
- **Efeitos hover**: Elevação e mudança de gradiente
- **Feedback visual**: Animações suaves ao clicar

### ✨ Animações e Transições
- **Fade-in**: Componentes aparecem suavemente
- **Transformações**: Botões se elevam no hover
- **Transições fluidas**: Todas as mudanças são animadas
- **Contador destacado**: Valor em destaque com fonte grande

## Objetivo do Exercício

- Praticar a criação de componentes Angular
- Aprender a usar serviços para compartilhar dados
- Entender a diferença entre manipulação de estado local e global
- Explorar conceitos de imutabilidade vs mutabilidade
- Aplicar design moderno e responsivo

## Aprendizados do Exercício

### 🧠 Conceitos Angular
- **Data Binding**: Interpolação `{{}}` para exibir dados
- **Event Binding**: `(click)` para capturar eventos
- **Component Architecture**: Separação de responsabilidades
- **Service Injection**: Injeção de dependência com `constructor`
- **Lifecycle Management**: Gerenciamento do ciclo de vida dos componentes

### 🔄 Padrões de Estado
- **Estado Local**: Variáveis dentro do componente
- **Estado Global**: Compartilhamento via serviços
- **Imutabilidade**: Preservação do estado anterior
- **Mutabilidade**: Modificação direta de valores

### 🎨 Design Patterns
- **Single Responsibility**: Cada componente tem uma função específica
- **Dependency Injection**: Serviços injetados automaticamente
- **Observer Pattern**: Angular detecta mudanças automaticamente

## Próximos Passos

Para expandir este projeto, considere implementar:

- **Roteamento**: Navegação entre diferentes contadores
- **Formulários**: Input manual de valores
- **LocalStorage**: Persistência de dados
- **Testes**: Unit tests para componentes e serviços
- **Animações**: Transições mais complexas com Angular Animations
- **PWA**: Progressive Web App capabilities

---

Este projeto é parte dos exercícios da disciplina de Angular e tem fins didáticos.

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
