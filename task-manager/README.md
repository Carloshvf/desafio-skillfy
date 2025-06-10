# Task Manager ✅🗂️

Aplicação de gerenciamento de tarefas desenvolvida como parte de um desafio técnico.  
Ela permite criar, editar, visualizar e excluir tarefas com integração a uma API de produtividade que sugere o melhor horário para execução.

---

## 🚀 Tecnologias utilizadas

- **React** 19 + **TypeScript**
- **React Router DOM**
- **React Query**
- **Tailwind CSS**
- **Jest** e **React Testing Library**
- **JSON Server** (mock API)
- **Date-fns**

---

## 📁 Estrutura

src/
├── components/ → Componentes reutilizáveis (TaskCard, PriorityBadge, etc.)
├── screens/ → Páginas (Dashboard, TaskList, TaskForm)
├── services/ → API centralizada
├── hooks/ → React Query Hooks
├── contexts/ → Contexto de preferências do usuário
├── types/ → Tipos compartilhados
├── styles/ → Variáveis de tema (opcional)

---

## 🧪 Rodando a aplicação

### 1. Instalar dependências

npm install

### 2. Rodar o mock da API

json-server --watch db.json --port 3001

### 3. Rodar a aplicação

npm run dev

Funcionalidades
Dashboard com visão geral e sugestões de horários

Lista de tarefas com filtros, ordenação e status

Formulário de criação e edição de tarefas

Integração com API de produtividade

Remoção de tarefas

Preview antes de salvar

Interface responsiva com Tailwind

### Endpoints usados

GET /tasks Listar tarefas

GET /tasks/:id Buscar tarefa por ID

POST /tasks Criar nova tarefa

PUT /tasks/:id Atualizar tarefa

DELETE /tasks/:id Excluir tarefa

POST /suggest-time Sugerir horário via AI mock

### Testes

Este projeto utiliza:

jest

@testing-library/react

Para rodar os testes: npm test
