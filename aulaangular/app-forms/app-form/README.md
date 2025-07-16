# 📝 App Forms - Projeto Angular

Um projeto Angular desenvolvido para demonstrar o uso de formulários reativos com validações e estilização moderna.

## 🎯 Sobre o Projeto

Este é um exercício prático que implementa dois tipos de formulários usando Angular Reactive Forms:

1. **Formulário de Cadastro** - Para registro de novos usuários
2. **Formulário de Contato** - Para envio de mensagens

O projeto demonstra conceitos fundamentais do Angular como:
- Formulários reativos (Reactive Forms)
- Validações de campos
- Binding de dados
- Componentização
- Estilização com CSS moderno

## 🚀 Tecnologias Utilizadas

### Frontend
- **Angular 19.2.0** - Framework principal
- **TypeScript 5.7.2** - Linguagem de programação
- **HTML5** - Estrutura das páginas
- **CSS3** - Estilização e layout responsivo

### Dependências Principais
- `@angular/forms` - Para formulários reativos
- `@angular/router` - Sistema de roteamento
- `@angular/common` - Módulos comuns do Angular
- `RxJS 7.8.0` - Programação reativa

### Ferramentas de Desenvolvimento
- **Angular CLI 19.2.15** - Interface de linha de comando
- **Jasmine & Karma** - Framework de testes
- **TypeScript Compiler** - Compilação do código

## 📋 Funcionalidades

### Formulário de Cadastro
- ✅ **Nome**: Campo obrigatório
- ✅ **Email**: Validação de formato de email
- ✅ **Senha**: Mínimo de 6 caracteres
- ✅ **Confirmar Senha**: Verificação de coincidência
- ✅ **Data de Nascimento**: Campo obrigatório
- ✅ **Telefone**: Validação de 10-11 dígitos

### Formulário de Contato
- ✅ **Nome**: Campo obrigatório
- ✅ **Email**: Validação de formato
- ✅ **Assunto**: Textarea para mensagem

### Características dos Formulários
- 🎨 **Design Responsivo**: Adapta-se a diferentes tamanhos de tela
- ✨ **Validações em Tempo Real**: Feedback visual imediato
- 🎯 **Estados Visuais**: Indicadores de campos válidos/inválidos
- 🌟 **Animações**: Efeitos hover e transições suaves
- 📱 **Mobile First**: Otimizado para dispositivos móveis

## 🎨 Design e UX

O projeto conta com uma interface moderna e intuitiva:

- **Paleta de Cores**: Tons de azul e verde para transmitir confiança
- **Tipografia**: Segoe UI para melhor legibilidade
- **Sombras e Bordas**: Elementos com visual limpo e profissional
- **Feedback Visual**: Estados visuais claros para validação
- **Responsividade**: Layout adaptativo para desktop, tablet e mobile

## 🛠️ Como Executar o Projeto

### Pré-requisitos
- Node.js (versão 18 ou superior)
- npm ou yarn
- Angular CLI

### Instalação
```bash
# Clone o repositório
git clone [url-do-repositorio]

# Navegue até a pasta do projeto
cd app-forms/app-form

# Instale as dependências
npm install

# Execute o projeto
npm start
```

O projeto estará disponível em `http://localhost:4200`

### Comandos Disponíveis
```bash
# Executar em modo desenvolvimento
npm start

# Fazer build do projeto
npm run build

# Executar testes
npm test

# Build com watch mode
npm run watch
```

## 📁 Estrutura do Projeto

```
app-form/
├── src/
│   ├── app/
│   │   ├── cadastro/
│   │   │   └── cadastro/
│   │   │       ├── cadastro.component.ts
│   │   │       ├── cadastro.component.html
│   │   │       ├── cadastro.component.css
│   │   │       └── cadastro.component.spec.ts
│   │   ├── formcontato/
│   │   │   └── formcontato/
│   │   │       ├── formcontato.component.ts
│   │   │       ├── formcontato.component.html
│   │   │       ├── formcontato.component.css
│   │   │       └── formcontato.component.spec.ts
│   │   ├── app.component.ts
│   │   ├── app.component.html
│   │   ├── app.config.ts
│   │   └── app.routes.ts
│   ├── index.html
│   ├── main.ts
│   └── styles.css
├── package.json
├── angular.json
└── tsconfig.json
```

## 🔍 Conceitos Demonstrados

### Reactive Forms
- Criação de FormGroups
- Validações síncronas
- Controle de estado dos campos
- Binding bidirecional

### Validações
- Campos obrigatórios (`Validators.required`)
- Validação de email (`Validators.email`)
- Validação de tamanho mínimo (`Validators.minLength`)
- Validação com regex (`Validators.pattern`)
- Validação customizada (comparação de senhas)

### CSS Avançado
- Flexbox para layout
- Grid responsivo
- Transições e animações
- Estados pseudo (hover, focus, active)
- Media queries para responsividade

## 🎓 Objetivos Educacionais

Este projeto foi desenvolvido para:
- Praticar formulários reativos no Angular
- Implementar validações robustas
- Criar interfaces responsivas
- Aplicar boas práticas de UX/UI
- Demonstrar organização de código em componentes

## 📱 Responsividade

O projeto foi desenvolvido com abordagem **mobile-first** e conta com:
- Breakpoints para tablet (768px) e mobile (480px)
- Layout flexível que se adapta ao tamanho da tela
- Elementos redimensionados adequadamente
- Experiência otimizada para touch devices

## 🔮 Possíveis Melhorias

- [ ] Implementar roteamento entre formulários
- [ ] Adicionar mais tipos de validação
- [ ] Integrar com backend/API
- [ ] Implementar testes unitários
- [ ] Adicionar internacionalização (i18n)
- [ ] Implementar tema dark/light

## 🛠️ Comandos Angular CLI

Para desenvolvimento com Angular CLI:

```bash
# Iniciar servidor de desenvolvimento
ng serve

# Gerar novos componentes
ng generate component nome-do-componente

# Build para produção
ng build

# Executar testes
ng test

# Ajuda com comandos disponíveis
ng generate --help
```

## 📚 Recursos Adicionais

- [Documentação oficial do Angular](https://angular.dev/)
- [Angular CLI Overview](https://angular.dev/tools/cli)
- [Reactive Forms Guide](https://angular.dev/guide/forms/reactive-forms)
- [Angular Validators](https://angular.dev/api/forms/Validators)

---

Desenvolvido com ❤️ para aprendizado de Angular e formulários reativos.
