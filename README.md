# 🧪 QA Automation Portfolio

Portfólio de testes automatizados criado para demonstrar habilidades em Quality Assurance.

## 📋 Sobre o Projeto

Este projeto contém testes automatizados end-to-end (E2E) usando **Cypress**, uma das ferramentas mais populares para automação de testes web.

## 🛠️ Tecnologias Utilizadas

- **Cypress** - Framework de testes E2E
- **JavaScript** - Linguagem de programação
- **Node.js** - Ambiente de execução

## 📁 Estrutura do Projeto

```
qa-portfolio/
├── cypress/
│   ├── e2e/
│   │   ├── login.cy.js       # Testes de login
│   │   └── cadastro.cy.js    # Testes de validação de formulário
│   └── fixtures/             # Dados de teste
├── cypress.config.js         # Configuração do Cypress
├── package.json              # Dependências do projeto
└── README.md                 # Este arquivo
```

## 🚀 Como Executar

### 1. Instalar dependências
```bash
npm install
```

### 2. Abrir interface do Cypress
```bash
npm run cy:open
```

### 3. Executar testes em modo headless
```bash
npm run cy:run
```

## 📝 Casos de Teste

### Login (`login.cy.js`)
- ✅ Login com credenciais válidas (Caminho Feliz)
- ❌ Usuário bloqueado
- ❌ Senha incorreta
- ❌ Campos obrigatórios vazios
- ❌ Usuário não existe

### Validação de Formulário (`cadastro.cy.js`)
- ✅ Validação de senha (8+ caracteres, 1 número, 1 maiúscula)
- ✅ Validação de e-mail (formato válido)
- ✅ Validação de idade (+18 anos)

## 🎯 Skills Demonstradas

- Automação de testes E2E
- Testes de API e UI
- Cenários positivos e negativos
- Validação de requisitos
- Boas práticas de código

---

**Autor**: Diogo 
**LinkedIn**: https://www.linkedin.com/in/diogo-nascimento-399576314/
**Email**: teologodiogo123@gmail.com
