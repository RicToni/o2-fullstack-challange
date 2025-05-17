# Backend - Sistema de Gestão de Estoque

Este é o backend do sistema de gestão de estoque desenvolvido com Node.js, Express e Sequelize (MySQL).

## Pré-requisitos

- Node.js >= 18.x
- MySQL Server em execução
- Um banco de dados criado (ex: `estoque_db`)

## Instalação

```bash
git clone < https://github.com/RicToni/o2-fullstack-challange >
cd backend
npm install
```

## Configuração do Banco de Dados

Crie um arquivo `.env` com as seguintes variáveis (ajuste conforme sua configuração):

```env
DB_NAME=estoque_db
DB_USER=root
DB_PASSWORD=sua_senha
DB_HOST=localhost
DB_DIALECT=mysql
```

Ou edite diretamente as credenciais no arquivo `database.js`.

## Executando o Servidor

```bash
npm run dev
```

> O servidor será iniciado em `http://localhost:3000`

## Rotas Disponíveis

### Produtos
- `GET /api/produtos`
- `POST /api/produtos`
- `PUT /api/produtos/:id`
- `DELETE /api/produtos/:id`

### Movimentações
- `GET /api/movimentacoes`
- `POST /api/movimentacoes`

---

## Sincronização com o Banco

Ao iniciar o servidor, o Sequelize sincronizará os modelos com o banco de dados.