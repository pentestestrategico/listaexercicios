# 🧮 Calculadora Angular 19

Um projeto de estudo desenvolvido em Angular 19 que demonstra o uso de **Services** e **Dependency Injection** através de duas calculadoras simples: uma calculadora de IMC (Índice de Massa Corporal) e uma calculadora de quadrado de números.

## 📋 Sobre o Projeto

Este exercício prático foi desenvolvido para demonstrar conceitos fundamentais do Angular, focando especialmente em:

- **Services**: Implementação de lógica de negócio em serviços reutilizáveis
- **Dependency Injection**: Injeção de dependências nos componentes
- **Two-way Data Binding**: Uso do ngModel para vinculação bidirecional de dados
- **Componentização**: Estruturação da aplicação em componentes modulares
- **Standalone Components**: Utilização dos novos componentes standalone do Angular 19

## 🚀 Funcionalidades

### 📊 Calculadora de IMC
- Calcula o Índice de Massa Corporal
- Recebe peso (kg) e altura (m) como entrada
- Exibe o resultado formatado com duas casas decimais
- Utiliza o serviço `ServiceImcService` para realizar o cálculo

### 🔢 Calculadora de Quadrado
- Calcula o quadrado de um número
- Recebe um número como entrada
- Exibe o resultado da operação
- Utiliza o serviço `ServiceQuadradoService` para realizar o cálculo

## 🛠️ Tecnologias Utilizadas

### Frontend Framework
- **Angular 19.2.0** - Framework principal
- **TypeScript 5.7.2** - Linguagem de programação
- **HTML5** - Estruturação das páginas
- **CSS3** - Estilização dos componentes

### Angular Modules & Features
- **@angular/core** - Funcionalidades core do Angular
- **@angular/common** - Módulos comuns (CommonModule)
- **@angular/forms** - FormsModule para two-way data binding
- **@angular/router** - Sistema de roteamento
- **Standalone Components** - Nova arquitetura de componentes

### Ferramentas de Desenvolvimento
- **Angular CLI 19.2.15** - Interface de linha de comando
- **Node.js** - Ambiente de execução
- **npm** - Gerenciador de pacotes

### Testes
- **Jasmine 5.6.0** - Framework de testes
- **Karma 6.4.0** - Test runner
- **TypeScript** - Tipagem estática

## 📁 Estrutura do Projeto

```
src/
├── app/
│   ├── app.component.html          # Template principal
│   ├── app.component.ts            # Componente principal
│   ├── app.component.css           # Estilos globais
│   ├── app.config.ts               # Configurações da aplicação
│   ├── app.routes.ts               # Configuração de rotas
│   └── app/
│       ├── imc/
│       │   ├── imc.component.ts    # Componente da calculadora IMC
│       │   ├── imc.component.html  # Template da calculadora IMC
│       │   └── imc.component.css   # Estilos da calculadora IMC
│       ├── quadrado/
│       │   ├── quadrado.component.ts    # Componente da calculadora quadrado
│       │   ├── quadrado.component.html  # Template da calculadora quadrado
│       │   └── quadrado.component.css   # Estilos da calculadora quadrado
│       └── services/
│           ├── service-imc.service.ts       # Serviço para cálculo de IMC
│           └── service-quadrado.service.ts  # Serviço para cálculo de quadrado
├── index.html                      # Página principal
├── main.ts                         # Ponto de entrada da aplicação
└── styles.css                      # Estilos globais
```

## 🚀 Como Executar

### Pré-requisitos
- Node.js (versão 18 ou superior)
- npm (geralmente instalado com o Node.js)
- Angular CLI

### Instalação e Execução

1. **Clone o repositório ou navegue até o diretório do projeto:**
   ```bash
   cd app-service
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Execute o servidor de desenvolvimento:**
   ```bash
   npm start
   # ou
   ng serve
   ```

4. **Acesse a aplicação:**
   Abra seu navegador e acesse `http://localhost:4200`

### Scripts Disponíveis

```bash
npm start          # Inicia o servidor de desenvolvimento
npm run build      # Gera build de produção
npm run watch      # Build em modo watch para desenvolvimento
npm test           # Executa os testes unitários
```

## 💡 Conceitos Demonstrados

### Services e Dependency Injection
```typescript
// Exemplo de Service
@Injectable({
  providedIn: 'root'
})
export class ServiceImcService {
  caculateImc(peso: number, altura: number) {
    return peso / (altura * altura);
  }
}

// Injeção no Component
constructor(private imcServico: ServiceImcService) {}
```

### Two-way Data Binding
```html
<input type="number" [(ngModel)]="peso" />
```

### Standalone Components
```typescript
@Component({
  selector: 'app-imc',
  imports: [CommonModule, FormsModule],
  templateUrl: './imc.component.html',
  styleUrl: './imc.component.css'
})
```

## 🎯 Objetivos de Aprendizado

Este projeto foi desenvolvido para praticar e demonstrar:

- ✅ Criação e uso de Services em Angular
- ✅ Implementação de Dependency Injection
- ✅ Uso do FormsModule e two-way data binding
- ✅ Componentização e reutilização de código
- ✅ Estruturação de projetos Angular
- ✅ Standalone Components (Angular 19)
- ✅ Boas práticas de desenvolvimento

## 🤝 Contribuições

Este é um projeto de estudo. Sugestões e melhorias são sempre bem-vindas!

## 📄 Licença

Este projeto é para fins educacionais e de aprendizado.

---

**Desenvolvido com ❤️ usando Angular 19**
