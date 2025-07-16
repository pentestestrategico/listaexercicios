# 🚀 Projeto Angular - Sistema de Autenticação e Rotas Protegidas

Este projeto é um exercício prático de **Angular 19** que implementa um sistema completo de navegação com autenticação, controle de acesso e gerenciamento de estado. O objetivo é demonstrar conceitos fundamentais do desenvolvimento web moderno usando Angular.

## 📋 Sobre o Exercício

O sistema simula uma aplicação web com:
- **Páginas públicas** (Home, Sobre, Serviços, Contato)
- **Sistema de login** com validação de credenciais
- **Área restrita** (Painel de Controle) protegida por guard
- **Dashboard interativo** com estatísticas e funcionalidades
- **Navegação dinâmica** e feedback visual em tempo real

### 🔐 Credenciais de Acesso
- **Usuário:** `adm`
- **Senha:** `123`

## 🛠️ Tecnologias Utilizadas

- **Angular 19** - Framework principal para construção da SPA
- **TypeScript** - Linguagem para desenvolvimento dos componentes e serviços
- **HTML5 & CSS3** - Estrutura e estilização com design responsivo
- **Angular Router** - Gerenciamento de rotas e navegação
- **Angular Forms** - Formulários reativos com validação
- **RxJS** - Gerenciamento de estado reativo
- **Guards** - Proteção de rotas com controle de acesso
- **Services** - Injeção de dependência e compartilhamento de dados

## 🏗️ Arquitetura do Projeto

```
src/app/
├── header/                 # Componente de navegação principal
├── home/                   # Página inicial com produtos
├── pages/
│   ├── sobre/             # Página sobre a empresa
│   ├── servico/           # Página de serviços
│   ├── contato/           # Página de contato
│   ├── painel-component/  # Formulário de login
│   └── painel-controle/   # Dashboard (área restrita)
├── service/
│   ├── auth.service.ts    # Serviço de autenticação
│   └── produtos-service.ts # Serviço de produtos
├── guards/
│   └── auth.guard.ts      # Guard de proteção de rotas
└── app.routes.ts          # Configuração das rotas
```

## ⚡ Funcionalidades Implementadas

### 🔒 Sistema de Autenticação
- Formulário de login com validação
- Persistência de sessão no localStorage
- Logout com limpeza de estado
- Feedback visual para erros e sucessos

### 🛡️ Proteção de Rotas
- Guard `authGuard` protege área restrita
- Redirecionamento automático para login
- Verificação de autenticação em tempo real

### 📊 Dashboard Interativo
- Estatísticas em tempo real
- Carregamento dinâmico de dados
- Atualização de informações
- Interface responsiva e moderna

### 🎨 Design e UX
- Layout responsivo (mobile-first)
- Animações e transições suaves
- Feedback visual consistente
- Gradientes e efeitos modernos

## 🚀 Como Executar

### Pré-requisitos
- Node.js (versão 18+)
- Angular CLI

### Instalação e Execução

1. **Clone o repositório:**
```bash
git clone <url-do-repositorio>
cd site
```

2. **Instale as dependências:**
```bash
npm install
```

3. **Execute o servidor de desenvolvimento:**
```bash
ng serve
```

4. **Acesse a aplicação:**
```
http://localhost:4200
```

## 🧭 Como Usar

1. **Navegação Pública:**
   - Acesse Home, Sobre, Serviços e Contato livremente
   - Visualize produtos na página inicial

2. **Acesso à Área Restrita:**
   - Clique em "Login" no menu
   - Use as credenciais: `adm` / `123`
   - Será redirecionado para o Painel de Controle

3. **Dashboard:**
   - Visualize estatísticas do sistema
   - Atualize dados em tempo real
   - Faça logout quando necessário

## 🔧 Comandos Úteis

```bash
# Servidor de desenvolvimento
ng serve

# Build para produção
ng build

# Testes unitários
ng test

# Gerar novo componente
ng generate component nome-do-componente

# Gerar novo serviço
ng generate service nome-do-servico
```

## 📚 Conceitos Aplicados

- **Componentes** e comunicação entre componentes
- **Serviços** e injeção de dependência
- **Roteamento** e navegação
- **Guards** e proteção de rotas
- **Formulários reativos** e validação
- **Observables** e programação reativa
- **Pipes** para formatação de dados
- **Lifecycle hooks** do Angular

## 🎯 Objetivos de Aprendizado

Este exercício demonstra:
- Estruturação de projetos Angular
- Implementação de autenticação básica
- Uso de guards para proteção de rotas
- Criação de interfaces responsivas
- Gerenciamento de estado com serviços
- Boas práticas de desenvolvimento Angular

---

**Desenvolvido com Angular 19** | **Exercício Prático** | **Dezembro 2024**
