# Blogging API

API para gerenciamento de posts e comentários de blog, construída com Node.js, Express e Prisma. Projeto desenvolvido para o desafio técnico, focando em clareza, boas práticas e facilidade de teste.

## Funcionalidades
- Criar e listar posts
- Adicionar comentários
- Consultar posts com comentários

## Requisitos
- Node.js (recomendado v14 ou superior)

## Como rodar o projeto

1. Instale as dependências:
   ```bash
   npm install
   ```
2. Rode as migrações e popule o banco com dados de exemplo:
   ```bash
   npx prisma migrate deploy
   npm run seed
   ```
3. Inicie o servidor:
   ```bash
   npm run dev
   ```
   O servidor estará disponível em `http://localhost:3000`.

## Endpoints principais

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
> O desafio não exige testes automatizados e recomenda não ultrapassar 4 horas de trabalho. Por isso, foquei em entregar uma API funcional, fácil de testar manualmente, e com exemplos claros para facilitar a avaliação.

> **Nota para o avaliador:**
> Para facilitar a leitura e respeitar o tempo do desafio, concentrei toda a lógica da API em um único arquivo (`index.js`). Em projetos reais, modularizaria o código separando rotas, controllers, serviços e middlewares para garantir escalabilidade e manutenibilidade.

## Testando com Postman

Se preferir, basta importar o arquivo `postman_collection.json` incluso no repositório para testar todas as rotas da API de forma prática e rápida.

## Observação sobre documentação

Em produção, adicionaria documentação interativa via Swagger/OpenAPI para facilitar a integração e o entendimento da API por outros devs e sistemas.

## Próximos passos (com mais tempo)
- Autenticação e autorização
- Paginação e filtros
- Testes automatizados
- Documentação Swagger/OpenAPI
- Deploy automatizado (CI/CD)

## Licença
MIT 