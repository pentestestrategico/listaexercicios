# Exercícios de Herança em TypeScript

Este repositório contém uma coleção de exercícios práticos demonstrando conceitos fundamentais de **Programação Orientada a Objetos (POO)** em TypeScript, com foco especial em **herança**, **polimorfismo** e **encapsulamento**.

## 🚀 Tecnologias Utilizadas

- **TypeScript 5.x** - Linguagem principal utilizada nos exercícios
- **Node.js** - Runtime para execução dos códigos JavaScript compilados
- **TypeScript Compiler (tsc)** - Para compilação dos arquivos .ts para .js
- **ES2016 (ES6)** - Target de compilação JavaScript
- **CommonJS** - Sistema de módulos utilizado

## 📁 Estrutura do Projeto

O projeto está organizado em diferentes módulos, cada um demonstrando aspectos específicos da herança:

```
herança/
├── exercicios/          # Sistema de Oficina (Carro + Conserto)
├── heranca1/           # Sistema de Animais (Polimorfismo)
├── heranca2/           # Sistema de Pessoas/Funcionários
├── heranca3/           # Sistema de Professores
└── README.md
```

## 🎯 Exercícios Implementados

### 📌 Exercício 1: Sistema de Oficina Mecânica
**Pasta:** `exercicios/`

**Conceitos Demonstrados:**
- Herança de classe base
- Override de métodos
- Composição de funcionalidades

**Classes:**
- `Carro` - Classe base com propriedades básicas do veículo
- `Conserto` - Classe derivada que adiciona informações de reparo

**Funcionalidades:**
- Cadastro de veículos com ID, nome, marca e ano
- Registro de consertos com preço e data
- Exibição completa dos dados do veículo e conserto

### 📌 Exercício 2: Sistema de Animais (Herança 1)
**Pasta:** `heranca1/`

**Conceitos Demonstrados:**
- Herança múltipla
- Polimorfismo com override
- Métodos específicos por classe

**Classes:**
- `Animal` - Classe base abstrata
- `Cachorro` - Implementação específica para cães
- `Gato` - Implementação específica para gatos

**Funcionalidades:**
- Propriedades comuns: nome, idade, raça
- Método polimórfico `fazerSom()` com comportamentos distintos
- Propriedade específica `corPelo` nas classes derivadas

### 📌 Exercício 3: Sistema de Funcionários (Herança 2)
**Pasta:** `heranca2/`

**Conceitos Demonstrados:**
- Herança com validação
- Sobrescrita de métodos
- Encapsulamento de propriedades

**Classes:**
- `Pessoas` - Classe base com dados pessoais
- `Funcionario` - Classe derivada com matrícula funcional

**Funcionalidades:**
- Cadastro de pessoas com código, nome e RG
- Extensão para funcionários com matrícula
- Override do método `mostrarString()`

### 📌 Exercício 4: Sistema de Professores (Herança 3)
**Pasta:** `heranca3/`

**Conceitos Demonstrados:**
- Validação de idade
- Métodos de registro específicos
- Controle de acesso com modificadores protected

**Classes:**
- `Pessoas` - Classe base com validação de idade
- `Professor` - Classe derivada com regras específicas

**Funcionalidades:**
- Validação de idade mínima (18 anos)
- Registro específico de professores
- Métodos protegidos para controle de acesso

## 🛠️ Como Executar

### Pré-requisitos
- Node.js instalado
- TypeScript instalado globalmente (`npm install -g typescript`)

### Compilação e Execução

Para cada exercício, navegue até a pasta correspondente e execute:

```bash
# Compilar arquivos TypeScript
tsc

# Executar o código JavaScript gerado
node main.js
```

### Exemplo - Executando o Sistema de Animais:
```bash
cd heranca1
tsc
node ./Animais/main.js
```

### Exemplo - Executando o Sistema de Oficina:
```bash
cd exercicios
tsc
node ./oficina/main.js
```

## 📋 Configuração TypeScript

Todos os exercícios utilizam configurações similares no `tsconfig.json`:

- **Target:** ES2016
- **Module:** CommonJS
- **Strict Mode:** Habilitado
- **Output Directory:** Configurado para organizar arquivos compilados

## 🎓 Conceitos de POO Demonstrados

### 1. **Herança**
- Extensão de classes base com `extends`
- Reutilização de código e propriedades

### 2. **Polimorfismo**
- Override de métodos com `override`
- Comportamentos específicos por classe derivada

### 3. **Encapsulamento**
- Modificadores de acesso: `private`, `protected`, `public`
- Métodos getter e setter

### 4. **Abstração**
- Classes base que definem contratos
- Implementações específicas nas classes derivadas

## 💡 Exemplos de Saída

### Sistema de Animais:
```
Mimi diz: Miau!
Mimi está comendo.
Branco
Rex diz: Au Au!
Rex está comendo.
Preto
```

### Sistema de Oficina:
```
Codigo: 1 - Nome: Civic - Marca: Honda - Ano: 2020
Preço do conserto: R$ 1200.50 - Data: 30/06/2025
```

### Sistema de Professores:
```
Professor registrado com sucesso!
Professor - ID:101, nome: Bruno, idade: 25
```

## 🤝 Contribuições

Este projeto foi desenvolvido como material educacional para demonstrar conceitos fundamentais de programação orientada a objetos em TypeScript. Contribuições e melhorias são sempre bem-vindas!

## 📝 Licença

Este projeto é destinado para fins educacionais e está disponível para uso acadêmico.

---

**Desenvolvido para aprendizado de Programação Orientada a Objetos com TypeScript** 🚀
