# 👟 App Web - Loja de Calçados

> Um exercício prático de desenvolvimento web utilizando Angular para criar uma aplicação de e-commerce de calçados.

## 📋 Sobre o Projeto

Este projeto é um exercício educacional que demonstra a criação de uma aplicação web completa utilizando Angular. A aplicação simula uma loja virtual de calçados com diferentes seções navegáveis e exibição de produtos em cards.

### 🎯 Objetivos do Exercício

- Praticar a estrutura de componentes Angular
- Implementar navegação entre páginas usando Angular Router
- Trabalhar com data binding e diretivas estruturais
- Aplicar conceitos de responsividade e design
- Gerenciar estado de componentes e comunicação entre eles

## 🛠️ Tecnologias Utilizadas

### Frontend
- **Angular 19.2.0** - Framework principal
- **TypeScript 5.7.2** - Linguagem de programação
- **HTML5** - Estruturação do conteúdo
- **CSS3** - Estilização e layout
- **Angular Router** - Navegação entre páginas

### Ferramentas de Desenvolvimento
- **Angular CLI 19.2.15** - Interface de linha de comando
- **Node.js** - Ambiente de execução
- **npm** - Gerenciador de pacotes

### Testes
- **Jasmine 5.6.0** - Framework de testes
- **Karma 6.4.0** - Test runner
- **TypeScript** - Tipagem estática

## 🏗️ Estrutura do Projeto

```
src/
├── app/
│   ├── components/          # Componentes reutilizáveis
│   │   ├── header/         # Navegação principal
│   │   ├── body/           # Exibição de produtos
│   │   └── footer/         # Rodapé da aplicação
│   ├── pages/              # Páginas da aplicação
│   │   ├── home/           # Página inicial
│   │   ├── sobre/          # Página sobre
│   │   ├── contato/        # Página de contato
│   │   └── produtos/       # Página de produtos
│   ├── app.component.*     # Componente raiz
│   ├── app.routes.ts       # Configuração de rotas
│   └── app.config.ts       # Configuração da aplicação
└── public/
    └── img/                # Imagens dos produtos
        ├── tenis.jpg
        ├── chinelo.jpg
        └── bota.jpg
```

## 🚀 Funcionalidades

- **Navegação Multi-páginas**: Sistema de rotas com Home, Sobre, Contato e Produtos
- **Catálogo de Produtos**: Exibição de calçados em formato de cards
- **Interface Responsiva**: Layout adaptável para diferentes dispositivos
- **Componentes Modulares**: Arquitetura baseada em componentes reutilizáveis

## 🖥️ Como Executar

### Pré-requisitos
- Node.js (versão 18 ou superior)
- npm ou yarn
- Angular CLI

### Instalação e Execução

1. **Clone o repositório ou baixe os arquivos**

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Execute o servidor de desenvolvimento:**
   ```bash
   ng serve
   ```
   ou
   ```bash
   npm start
   ```

4. **Acesse a aplicação:**
   Abra seu navegador e navegue para `http://localhost:4200/`

### Comandos Úteis

```bash
# Gerar novos componentes
ng generate component nome-do-componente

# Build para produção
ng build

# Executar testes
ng test

# Ver ajuda do Angular CLI
ng generate --help
```

## 🎨 Recursos Visuais

A aplicação apresenta:
- Cards de produtos com imagens dos calçados
- Menu de navegação intuitivo
- Layout responsivo e moderno
- Estrutura organizada de componentes

## 📚 Conceitos Angular Demonstrados

- **Componentes**: Criação e organização de componentes
- **Data Binding**: Interpolação e property binding
- **Diretivas**: Uso do `*ngFor` para listas
- **Roteamento**: Navegação entre páginas
- **Módulos**: Organização da aplicação em módulos
- **Services**: (Pode ser expandido para gerenciar dados)

## 🎓 Aprendizados

Este exercício aborda:
- Estruturação de projetos Angular
- Criação de SPAs (Single Page Applications)
- Boas práticas de desenvolvimento frontend
- Organização de código e componentização
- Uso do Angular CLI para produtividade

---

**Projeto desenvolvido como exercício educacional em Angular** 🚀
