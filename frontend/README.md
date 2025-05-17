# Frontend - Sistema de Gestão de Estoque

Este é o frontend do sistema, desenvolvido com React + Vite + Tailwind CSS.

## Pré-requisitos

- Node.js >= 18.x

## Instalação

```bash
git clone < https://github.com/RicToni/o2-fullstack-challange >
cd frontend
npm install
```

## Execução do Frontend

```bash
npm run dev
```

> A aplicação será iniciada normalmente em `http://localhost:5173`

## Ajustes de API

Certifique-se de que o backend esteja rodando em `http://localhost:3000`.

Se necessário, edite a URL no `useEffect` do componente `ListarProdutos.jsx`:

```js
fetch('http://localhost:3000/api/produtos')
```

## Estrutura

- `src/components`: Componentes reutilizáveis
- `src/pages`: Páginas da aplicação
- `src/index.css`: Estilos com Tailwind CSS

---

## Tecnologias Utilizadas

- React
- Tailwind CSS
- Vite