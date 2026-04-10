# 📚 Sistema do Prof. Carlos
 
Sistema web para gerenciamento de notas e frequência de alunos, desenvolvido com React + Vite.
 
---
 
## 🚀 Como rodar o projeto
 
### Pré-requisitos
- [Node.js](https://nodejs.org/) versão 18 ou superior
 
### Passos
 
```bash
# 1. Entre na pasta do projeto
cd sistema-carlos
 
# 2. Instale as dependências
npm install
 
# 3. Rode em modo desenvolvimento
npm run dev
```
 
Acesse **http://localhost:5173** no navegador.
 
---
 
## 📦 Build para produção
 
```bash
npm run build
```
 
---
 
## 🗂️ Estrutura do projeto
 
```
sistema-carlos/
├── public/              # Arquivos estáticos (ícones, imagens)
├── src/                 # Onde o código da aplicação vive
│   ├── App.jsx          # Todo o sistema: lógica, constantes e componentes
│   ├── App.css          # Estilos do componente principal
│   ├── index.css        # Estilos globais da aplicação
│   └── main.jsx         # Ponto de entrada do React (não mexa)
├── index.html           # HTML base da aplicação
├── package.json         # Dependências e scripts do projeto
└── vite.config.js       # Configuração do compilador Vite
```
 
### O que está dentro do App.jsx
 
| Seção | O que faz |
|---|---|
| `CONSTANTES` | Nomes das disciplinas e limite de frequência |
| `FUNÇÕES DE CÁLCULO` | Média do aluno, média por disciplina, filtros |
| `FormularioAluno` | Formulário passo a passo (um campo por vez) |
| `TabelaResultados` | Tabela com notas, médias e status |
| `ListasAtencao` | Painéis de destaque e alunos em risco |
| `App` | Componente raiz que orquestra tudo |
 
---
 
## ✨ Funcionalidades
 
- Cadastro **passo a passo** — um campo por vez para evitar erros
- Cálculo automático de **média por aluno** e **média da turma por disciplina**
- Destaque de alunos **acima da média** ⭐
- Alerta de alunos com **frequência abaixo de 75%** ⚠️
- Remoção de alunos da lista
- Dados de exemplo pré-carregados
 
---
 
## 🛠️ Tecnologias
 
- [React 18](https://react.dev/)
- [Vite](https://vitejs.dev/)
- JavaScript (ES2022)