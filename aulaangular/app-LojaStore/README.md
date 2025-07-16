
# Loja Angular Store

Loja Angular Store é um projeto desenvolvido como exercício prático para a disciplina de Angular. O objetivo é criar uma loja virtual fictícia especializada em equipamentos de Taekwondo, permitindo ao usuário visualizar produtos, obter informações de contato e interagir com a loja por meio de diferentes canais, incluindo redes sociais.

## Sobre o Projeto

O sistema simula uma loja online de artigos esportivos para Taekwondo, apresentando uma vitrine de produtos, página de contato com formulário, informações institucionais e integração visual com redes sociais. O projeto é estruturado em diferentes componentes que exercitam conceitos fundamentais do Angular.

## Exercícios Implementados

### 1. Componentização e Estrutura
- **Header Component**: Navegação principal com menu horizontal e roteamento
- **Footer Component**: Informações institucionais e links úteis
- **Home Component**: Componente principal que renderiza a listagem de produtos

### 2. Roteamento (Angular Router)
- **Configuração de rotas**: Sistema de navegação entre páginas
- **Redirecionamento**: Página inicial redireciona automaticamente para produtos
- **RouterLink**: Links de navegação no header

### 3. Listagem e Manipulação de Dados
- **Produtos Component**: 
  - Array de objetos com dados dos produtos
  - Interpolação de dados ({{}} - data binding)
  - Diretiva estrutural `*ngFor` para listagem
  - Property binding `[src]` e `[alt]` para imagens
  - Exibição de cards responsivos com informações dos produtos

### 4. Formulários e Interação
- **Contato Component**:
  - Formulário completo com diferentes tipos de input
  - Campos: nome, email, telefone, assunto (select) e mensagem (textarea)
  - Validações HTML5 (required, email, tel)
  - Layout em grid responsivo

### 5. Interface de Redes Sociais
- **RedSocial Component**:
  - Cards informativos para diferentes plataformas sociais
  - Estatísticas fictícias (seguidores, inscritos)
  - Newsletter com formulário de inscrição
  - Seção de compartilhamento e hashtags
  - Layout em grid com design moderno

### 6. Estilização e Design
- **CSS Grid e Flexbox**: Layout responsivo
- **CSS Modules**: Estilos encapsulados por componente
- **Design System**: Consistência visual em todos os componentes
- **Responsividade**: Interface adaptável para diferentes dispositivos

### Funcionalidades principais
- Navegação entre páginas com Angular Router
- Listagem dinâmica de produtos com *ngFor
- Formulários de contato com validação
- Interface de redes sociais interativa
- Layout responsivo e moderno
- Componentização estruturada

## Tecnologias Utilizadas
- [Angular 19](https://angular.io/)
- TypeScript
- HTML5 e CSS3
- RxJS
- Ferramentas: Angular CLI, Jasmine, Karma

## Como executar

Para rodar o projeto localmente:

```bash
ng serve
```

Acesse `http://localhost:4200/` no navegador.

---

## Comandos úteis

### Gerar novo componente
```bash
ng generate component nome-do-componente
```

### Build do projeto
```bash
ng build
```

### Rodar testes unitários
```bash
ng test
```

---

Para mais informações sobre Angular CLI, acesse a [documentação oficial](https://angular.dev/tools/cli).
