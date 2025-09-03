# 📚 Galeria de Livros - Frontend

Frontend do sistema **Galeria de Livros**, um aplicativo para gerenciamento e visualização de livros e autores. Permite adicionar, editar e deletar livros, além de associá-los a autores cadastrados.  

O projeto é desenvolvido em **React** com **Material UI** e utiliza **Axios** para comunicação com a API backend.

---

## 🧐 Sobre o Projeto

O **Book Gallery Frontend** é responsável pela interface de usuário do aplicativo. Ele oferece:

- Tela de listagem de livros e autores.
- Modal para criação e edição de livros e autores.
- Integração com backend via API RESTful.
- Visual moderno e responsivo, com tema bege e gradientes animados.

---

## 🛠 Tecnologias Utilizadas

- **React 19**
- **React Router DOM 7** – navegação entre páginas.
- **Material UI 7** – componentes e estilos modernos.
- **@mui/x-date-pickers** – seleção de datas.
- **Axios** – comunicação HTTP com a API backend.
- **Dayjs** – manipulação de datas.
- **Vite** – bundler e servidor de desenvolvimento rápido.
- **ESLint** – análise de código e boas práticas.

---

## ⚙ Funcionalidades

- **Listagem de livros** com título, subtítulo, ano, edição e autor.
- **CRUD de livros** (create, read, update, delete) via modal.
- **CRUD de autores** (create, read, update, delete) via modal.
- **Filtro e seleção de autores** ao criar/editar livros.
- **Responsividade** para desktop e mobile.

---

## 🚀 Como Rodar

### Pré-requisitos

- Node.js >= 18.x
- NPM ou Yarn

### Passos

```bash
# 1. Clone este repositório
git clone https://github.com/seu-usuario/book-gallery-frontend.git
cd book-gallery-frontend

# 2. Instale as dependências
npm install
# ou
yarn

# 3. Renomeie o .env.example para .env, coloque a URL da api
"VITE_API_URL=http://127.0.0.1:8000/api"

# 4. Inicie o servidor de desenvolvimento
npm run dev
# ou
yarn dev

# 5. Abra no navegador
# http://localhost:5173
```

### 📦 Scripts Disponíveis

```bash
# Inicia o servidor de desenvolvimento
npm run dev

# Gera a versão de produção
npm run build

# Visualiza o build de produção
npm run preview

# Executa o ESLint para análise de código
npm run lint
```

### 📁 Estrutura do Projeto

```bash
book-gallery-frontend/
│
├─ src/
│  ├─ Components/       # Componentes reutilizáveis
│  ├─ Services/         # Funções de comunicação com API
│  ├─ Views/            # Páginas do sistema (Books, Authors, Home)
│  ├─ Layout/           # Header, Footer, Router
│  ├─ App.jsx           # Componente raiz
│  └─ main.jsx          # Entrada do React/Vite
│
├─ public/              # Arquivos estáticos
├─ package.json
└─ vite.config.js
```


