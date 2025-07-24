# Blogging API

A simple RESTful API for managing blog posts and comments, built with Node.js and Express.

## Features
- Create and list blog posts
- Add comments to posts
- Retrieve posts with their comments

## Requirements
- Node.js (v14+ recommended)

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the server:
   ```bash
   npm run dev
   ```
   The server will run on `http://localhost:3000` by default.

## API Endpoints

### List all posts
- **GET** `/api/posts`
- **Response:**
  ```json
  [
    { "id": 1, "title": "First Post", "commentCount": 2 },
    ...
  ]
  ```

### Create a new post
- **POST** `/api/posts`
- **Body:**
  ```json
  { "title": "Post Title", "content": "Post content." }
  ```
- **Response:**
  ```json
  { "id": 1, "title": "Post Title", "content": "Post content.", "comments": [] }
  ```

### Get a post by ID (with comments)
- **GET** `/api/posts/:id`
- **Response:**
  ```json
  {
    "id": 1,
    "title": "Post Title",
    "content": "Post content.",
    "comments": [
      { "id": 1, "postId": 1, "content": "Nice post!" }
    ]
  }
  ```

### Add a comment to a post
- **POST** `/api/posts/:id/comments`
- **Body:**
  ```json
  { "content": "Great article!" }
  ```
- **Response:**
  ```json
  { "id": 1, "postId": 1, "content": "Great article!" }
  ```

## Como testar

O projeto já está pronto para ser testado manualmente, conforme esperado no desafio. Após rodar o seed (`npm run seed`), o banco estará populado com exemplos de posts e comentários.

Aqui estão exemplos de requisições para cada rota principal usando `curl`:

### Listar todos os posts
```bash
curl -X GET http://localhost:3000/api/posts
```

### Criar um novo post
```bash
curl -X POST http://localhost:3000/api/posts \
  -H "Content-Type: application/json" \
  -d '{"title": "Novo post", "content": "Conteúdo do novo post"}'
```

### Buscar um post específico (exemplo: id 1)
```bash
curl -X GET http://localhost:3000/api/posts/1
```

### Adicionar comentário a um post (exemplo: id 1)
```bash
curl -X POST http://localhost:3000/api/posts/1/comments \
  -H "Content-Type: application/json" \
  -d '{"content": "Comentário de teste"}'
```

---

> **Nota:**
> O desafio não exige testes automatizados e recomenda não ultrapassar 4 horas de trabalho. Por isso, o foco foi entregar uma API funcional, validada manualmente, com exemplos claros para facilitar a avaliação.

## Next Steps (with more time)
- Add persistent storage (e.g., SQLite, MongoDB)
- Implement authentication & authorization
- Add pagination and filtering
- Write automated tests
- Add Swagger/OpenAPI documentation
- Deploy to a cloud provider

## License
MIT 

## Testando com Postman

Você pode importar o arquivo `postman_collection.json` incluso no repositório para testar todas as rotas da API de forma prática e rápida.

## Observação sobre documentação

Em um ambiente de produção, seria altamente recomendada a inclusão de documentação interativa via Swagger/OpenAPI, facilitando a integração e o entendimento da API por outros desenvolvedores e sistemas. 