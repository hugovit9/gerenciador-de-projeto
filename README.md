# 💰 Cost — Gerenciador de Projetos

> Um gerenciador de projetos simples e intuitivo, desenvolvido em **React.js**!

---

## 🧭 Sobre o Projeto

O **Cost** é uma aplicação web que permite **criar, editar e gerenciar projetos** e seus respectivos **custos e serviços**.  
A ideia principal é ajudar a organizar o orçamento de projetos, controlando quanto foi gasto e quanto ainda pode ser investido.

Este projeto foi desenvolvido **como estudo e prática de React.js**, com foco em **componentização**, **rotas**, **estados**, **hooks**, e **consumo de API com JSON Server**.

---

## ⚙️ Funcionalidades

✅ Criar novos projetos  
✅ Definir orçamento e categoria  
✅ Editar e excluir projetos existentes  
✅ Adicionar e remover serviços  
✅ Controle automático do orçamento (não ultrapassar o limite definido)  
✅ Feedback visual através de mensagens dinâmicas  
✅ Layout responsivo e moderno  

---

## 🧱 Tecnologias Utilizadas

- ⚛️ **React.js** — Biblioteca principal do projeto  
- 🎨 **CSS Modules** — Estilização modular e componentizada  
- 🔄 **React Router DOM** — Sistema de rotas SPA  
- 💾 **JSON Server** — Simulação de backend com API REST fake  
- 🧠 **Hooks (useState, useEffect)** — Controle de estado e efeitos colaterais  
- 🧩 **Fetch API** — Requisições HTTP para o JSON Server  

---

## 🧰 Como Executar o Projeto Localmente

### 📦 Pré-requisitos
Certifique-se de ter instalado:
- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)

---

### 🚀 Passo a passo

1. **Clone o repositório**
   ```bash
   git clone https://github.com/seu-usuario/cost.git

2. **Acesse a pasta do projeto**
   ```bash
   cd cost
   
3. **Instale as dependências**
   ```bash
   npm install

4. **Inicie o JSON Server**
   ```bash
   npx json-server --watch db.json --port 5000

5. **Execute o projeto React**
   ```bash
   npm start

6. **Acesse no navegador:**
   ```bash
   http://localhost:5000

---

## 📁 Estrutura de Pastas

📦 cost
├── 📁 public
├── 📁 src
│   ├── 📁 components
│   │   ├── 📁 Form
│   │   ├── 📁 Layout
│   │   ├── 📁 Pages
│   │   ├── 📁 Projects
│   │   ├── 📁 Services
│   ├── App.js
│   ├── index.js
│   ├── index.css
│   └── db.json
└── README.md

---

🎨 Layout

O design do Cost segue uma linha limpa, moderna e responsiva, com destaque para:

Cores suaves e contrastantes 🎨

Cards com sombras e cantos arredondados

Mensagens animadas para feedback do usuário

---

💡 Aprendizados

Durante o desenvolvimento deste projeto, foram reforçados conceitos importantes como:

Criação e reutilização de componentes React

Comunicação entre componentes (props e lifting state up)

Manipulação de estados e side effects

Integração com APIs simuladas

Organização de pastas e boas práticas de código

---

