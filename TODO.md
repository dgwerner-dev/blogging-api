# TODO & Sugestões de Melhorias

Este projeto já cobre todos os requisitos do desafio, mas aqui vão algumas ideias e melhorias que podem ser implementadas para deixá-lo ainda mais robusto e pronto para produção real:

- [ ] **Adicionar autenticação e autorização**
  - Permitir que apenas usuários autenticados possam criar posts/comentários.
  - Diferenciar permissões (ex: autor pode editar/deletar seu post).

- [ ] **Paginação e filtros nos endpoints**
  - Adicionar paginação em `/api/posts` e `/api/posts/:id/comments` para evitar retornos muito grandes.
  - Permitir busca por título ou conteúdo.

- [ ] **Validações mais avançadas**
  - Limitar tamanho de título/conteúdo.
  - Prevenir spam de comentários.

- [ ] **Testes automatizados**
  - Cobrir rotas principais com testes de integração (ex: Jest + Supertest).
  - Testar casos de erro e borda.

- [ ] **Documentação OpenAPI/Swagger**
  - Gerar documentação interativa para facilitar integração de terceiros.

- [ ] **Deploy automatizado (CI/CD)**
  - Configurar pipeline para deploy automático (ex: GitHub Actions).

- [ ] **Melhor tratamento de erros**
  - Padronizar respostas de erro e logar exceções para monitoramento.

- [ ] **Rate limiting**
  - Proteger a API contra abuso com limites de requisições.

- [ ] **Permitir edição e deleção de posts/comentários**
  - Endpoints para update/delete, respeitando regras de permissão.

- [ ] **Melhorar o README**
  - Adicionar exemplos de requisições (curl/Postman) e prints de respostas.

---

Se for evoluir o projeto, priorizar autenticação, paginação e testes automatizados. Qualquer dúvida ou sugestão, só chamar! 