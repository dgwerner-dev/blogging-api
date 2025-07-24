const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  // Limpa dados antigos para evitar duplicidade
  await prisma.comment.deleteMany();
  await prisma.blogPost.deleteMany();

  // Cria alguns posts de exemplo
  const post1 = await prisma.blogPost.create({
    data: {
      title: 'Primeiro post',
      content: 'Conteúdo do primeiro post',
      comments: {
        create: [
          { content: 'Comentário 1 no primeiro post' },
          { content: 'Comentário 2 no primeiro post' },
        ],
      },
    },
    include: { comments: true },
  });

  const post2 = await prisma.blogPost.create({
    data: {
      title: 'Segundo post',
      content: 'Conteúdo do segundo post',
      comments: {
        create: [
          { content: 'Comentário único no segundo post' },
        ],
      },
    },
    include: { comments: true },
  });

  const post3 = await prisma.blogPost.create({
    data: {
      title: 'Terceiro post',
      content: 'Conteúdo do terceiro post',
    },
  });

  console.log('Seed concluído! Banco populado com exemplos.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  }); 