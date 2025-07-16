# 📊 Avaliação 30 Pontos - Angular

> **Projeto de avaliação desenvolvido em Angular com funcionalidades de cálculo matemático e consumo de API REST.**

## 📋 Sobre o Projeto

Este projeto foi desenvolvido como parte de uma avaliação acadêmica de 30 pontos, demonstrando conhecimentos fundamentais em Angular. A aplicação possui duas funcionalidades principais:

1. **Calculadora de Quadrado** - Permite calcular o quadrado de um número inserido pelo usuário
2. **Consumo de API REST** - Exibe dados de posts obtidos da API pública JSONPlaceholder

## 🚀 Tecnologias Utilizadas

### Frontend
- **Angular** v19.2.0
- **TypeScript** - Linguagem de programação
- **HTML5** - Estruturação das páginas
- **CSS3** - Estilização e layout responsivo
- **RxJS** v7.8.0 - Programação reativa

### Dependências Principais
- **@angular/core** - Núcleo do framework Angular
- **@angular/common** - Funcionalidades comuns do Angular
- **@angular/forms** - Formulários e validação
- **@angular/router** - Sistema de roteamento
- **@angular/platform-browser** - Suporte para navegadores

### Ferramentas de Desenvolvimento
- **Angular CLI** v19.2.15 - Interface de linha de comando
- **Karma** - Test runner
- **Jasmine** - Framework de testes

## 🎯 Funcionalidades

### 🔢 Calculadora de Quadrado
- Interface intuitiva com botão de toggle
- Campo de entrada numérica
- Cálculo em tempo real
- Exibição do resultado com feedback visual
- Validação de entrada

### 🌐 Consumo de API
- Integração com JSONPlaceholder API
- Listagem de posts com informações completas
- Estados de carregamento
- Tratamento de erros
- Interface responsiva para exibição dos dados

## 📁 Estrutura do Projeto

```
src/
├── app/
│   ├── componente/
│   │   ├── quadrado/
│   │   │   ├── quadrado.component.ts
│   │   │   ├── quadrado.component.html
│   │   │   └── quadrado.component.css
│   │   └── authapi/
│   │       ├── authapi.component.ts
│   │       ├── authapi.component.html
│   │       └── authapi.component.css
│   ├── servicos/
│   │   ├── calcular-quadrado.service.ts
│   │   └── auth-api.service.ts
│   ├── app.component.ts
│   ├── app.component.html
│   ├── app.component.css
│   ├── app.config.ts
│   └── app.routes.ts
├── index.html
├── main.ts
└── styles.css
```

## 🛠️ Instalação e Execução

### Pré-requisitos
- **Node.js** (versão 18 ou superior)
- **npm** (gerenciador de pacotes)
- **Angular CLI** (instalado globalmente)

### Passos para execução

1. **Clone o repositório**
```bash
git clone [url-do-repositorio]
cd avaliacao30pts
```

2. **Instale as dependências**
```bash
npm install
```

3. **Execute o servidor de desenvolvimento**
```bash
ng serve
```

4. **Acesse a aplicação**
```
http://localhost:4200/
```

## 📱 Como Usar

### Calculadora de Quadrado
1. Clique no botão "🔢 Calcular Quadrado"
2. Digite um número no campo que aparecerá
3. Clique em "⚡ Calcular"
4. Veja o resultado exibido na tela

### Lista de Posts
1. Clique no botão "Mostrar Lista de Posts"
2. Clique em "Carregar Posts da API"
3. Aguarde o carregamento dos dados
4. Navegue pela lista de posts exibida

## 🎨 Layout e Design

O projeto utiliza um design moderno e responsivo com:
- **Gradientes** para backgrounds
- **Animações CSS** suaves
- **Layout flexível** que se adapta a diferentes telas
- **Paleta de cores** azul e branca para consistência visual
- **Tipografia** Segoe UI para melhor legibilidade

## 📡 API Utilizada

**JSONPlaceholder** - API REST gratuita para testes
- **URL:** https://jsonplaceholder.typicode.com/posts
- **Método:** GET
- **Retorno:** Array de objetos com posts (id, userId, title, body)

## 🧪 Arquitetura

### Padrões Utilizados
- **Component-based Architecture** - Separação em componentes reutilizáveis
- **Service Layer** - Lógica de negócio centralizada em serviços
- **Dependency Injection** - Injeção de dependências nativa do Angular
- **Reactive Programming** - Uso de Observables do RxJS

### Serviços
- **CalcularQuadradoService** - Lógica de cálculo matemático
- **AuthApiService** - Comunicação com API externa

## 🔧 Scripts Disponíveis

```bash
npm start          # Inicia o servidor de desenvolvimento
npm run build      # Build para produção
npm run watch      # Build em modo watch
npm test           # Executa os testes unitários
```

## 📊 Critérios de Avaliação Atendidos

- ✅ **Uso correto do Angular** - Components, Services, Pipes
- ✅ **TypeScript** - Tipagem adequada e boas práticas
- ✅ **Consumo de API** - Integração com JSONPlaceholder
- ✅ **Formulários** - Two-way data binding com ngModel
- ✅ **Estilização** - CSS responsivo e moderno
- ✅ **Estrutura de projeto** - Organização em módulos/componentes

## 👨‍💻 Desenvolvedor

**Anne Caroline** - Estudante de Desenvolvimento Web

---

> 📝 **Nota:** Este projeto foi desenvolvido para fins acadêmicos como parte de uma avaliação de 30 pontos na disciplina de Angular.

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

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
