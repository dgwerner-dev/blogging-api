# TODO & Sugestões de Melhorias

O projeto já cobre tudo que foi pedido no desafio, mas sempre dá pra deixar mais robusto e pronto pra produção. Algumas ideias que eu mesmo priorizaria se fosse evoluir:

- [ ] **Autenticação e autorização**
  - Só usuários autenticados podem criar posts/comentários.
  - Permissões: autor pode editar/deletar seu post.

- [ ] **Paginação e filtros**
  - Paginação em `/api/posts` e `/api/posts/:id/comments`.
  - Filtro por título/conteúdo.

- [ ] **Validações mais rígidas**
  - Limitar tamanho de título/conteúdo.
  - Prevenir spam.

- [ ] **Testes automatizados**
  - Cobrir rotas principais (Jest + Supertest).
  - Testar casos de erro e borda.

- [ ] **Swagger/OpenAPI**
  - Documentação interativa pra facilitar integração.

- [ ] **CI/CD**
  - Pipeline de deploy automático (ex: GitHub Actions).

- [ ] **Tratamento de erros**
  - Padronizar respostas e logar exceções.

- [ ] **Rate limiting**
  - Proteger a API contra abuso.

- [ ] **Permitir edição/deleção de posts/comentários**
  - Endpoints de update/delete, respeitando permissões.

- [ ] **README mais completo**
  - Exemplos de requisições e prints de respostas.

---

Se for evoluir, priorize autenticação, paginação e testes. Qualquer dúvida ou sugestão, só chamar! 