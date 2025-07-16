# App Guard - Sistema de Autenticação Angular

Este projeto é uma aplicação Angular que demonstra conceitos fundamentais de autenticação, guards, consumo de APIs e roteamento.

## 🚀 Tecnologias Utilizadas

- **Angular 19.2.0** - Framework principal
- **TypeScript 5.7.2** - Linguagem de programação
- **RxJS 7.8.0** - Programação reativa para gerenciamento de dados assíncronos
- **Angular Router** - Sistema de roteamento
- **HTTP Client** - Para requisições HTTP
- **Jasmine & Karma** - Framework de testes

### Dependências Principais

```json
{
  "@angular/common": "^19.2.0",
  "@angular/core": "^19.2.0",
  "@angular/forms": "^19.2.0",
  "@angular/router": "^19.2.0",
  "rxjs": "~7.8.0"
}
```

## 📁 Estrutura do Projeto

```
src/app/
├── auth.guard.ts          # Guard de autenticação
├── auth.service.ts        # Serviço de autenticação
├── app.routes.ts          # Configuração de rotas
├── login/                 # Componente de login
├── home/                  # Componente home (protegido)
├── dados/
│   ├── dados/            # Componente para consumo direto de API
│   └── dados2/           # Componente usando serviço
└── serviceAPI/           # Serviço para requisições HTTP
```

## 🎯 Exercícios e Funcionalidades

### 1. **Sistema de Autenticação (AuthService + AuthGuard)**
- **Localização**: `auth.service.ts` e `auth.guard.ts`
- **Objetivo**: Implementar um sistema básico de login/logout
- **Funcionalidades**:
  - Login simples (usuário: "admin", senha: "123")
  - Verificação de estado de autenticação
  - Proteção de rotas através de Guards

### 2. **Componente de Login**
- **Localização**: `login/`
- **Objetivo**: Criar formulário de autenticação
- **Funcionalidades**:
  - Formulário reativo com validação
  - Integração com AuthService
  - Redirecionamento após login bem-sucedido

### 3. **Proteção de Rotas (Route Guards)**
- **Localização**: `auth.guard.ts` + `app.routes.ts`
- **Objetivo**: Proteger rotas privadas
- **Funcionalidades**:
  - Guard funcional usando `CanActivateFn`
  - Redirecionamento automático para login
  - Proteção da rota `/home`

### 4. **Consumo de API - Método Direto**
- **Localização**: `dados/dados/`
- **Objetivo**: Consumir API externa diretamente no componente
- **Funcionalidades**:
  - Requisição HTTP para JSONPlaceholder API
  - Exibição de lista de usuários
  - Uso direto do HttpClient

### 5. **Consumo de API - Usando Serviço**
- **Localização**: `dados/dados2/` + `serviceAPI/`
- **Objetivo**: Implementar padrão de separação de responsabilidades
- **Funcionalidades**:
  - Serviço dedicado para API (ApiService)
  - Melhor organização e reutilização de código
  - Tipagem com Observable

### 6. **Roteamento e Navegação**
- **Localização**: `app.routes.ts`
- **Objetivo**: Configurar sistema de navegação
- **Funcionalidades**:
  - Rota padrão redirecionando para login
  - Rotas protegidas e públicas
  - Integração com Guards

## 🔧 Como Executar

1. **Instalar dependências**:
```bash
npm install
```

2. **Executar em modo desenvolvimento**:
```bash
ng serve
```

3. **Acessar a aplicação**:
```
http://localhost:4200
```

## 📝 Credenciais de Acesso

- **Usuário**: admin
- **Senha**: 123

## 🧪 Executar Testes

```bash
ng test
```

## 🏗️ Build para Produção

```bash
ng build
```

## 📚 Conceitos Demonstrados

- **Dependency Injection**: Injeção de serviços nos componentes
- **Reactive Programming**: Uso de Observables e RxJS
- **Route Guards**: Proteção de rotas com autenticação
- **HTTP Client**: Consumo de APIs REST
- **Component Communication**: Comunicação entre componentes e serviços
- **Template-driven Forms**: Formulários reativos
- **Lifecycle Hooks**: Uso do ngOnInit

## 🎓 Objetivos de Aprendizado

Este projeto foi desenvolvido para demonstrar:

1. Como implementar autenticação em Angular
2. Como proteger rotas usando Guards
3. Diferentes formas de consumir APIs (direto vs. serviço)
4. Boas práticas de organização de código
5. Uso de TypeScript e tipagem forte
6. Programação reativa com RxJS

---

*Projeto desenvolvido para fins educacionais - Aula Angular*
