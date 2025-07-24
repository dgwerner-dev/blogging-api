const express = require('express');
const cors = require('cors');
const { PrismaClient } = require('@prisma/client');

const app = express();
const PORT = process.env.PORT || 3000;
const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());

// GET /api/posts
app.get('/api/posts', async (req, res) => {
  try {
    const posts = await prisma.blogPost.findMany({
      select: {
        id: true,
        title: true,
        comments: { select: { id: true } },
      },
      orderBy: { createdAt: 'desc' },
    });
    const result = posts.map(post => ({
      id: post.id,
      title: post.title,
      commentCount: post.comments.length,
    }));
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch posts.' });
  }
});

// POST /api/posts
app.post('/api/posts', async (req, res) => {
  const { title, content } = req.body;
  if (!title || !content) {
    return res.status(400).json({ error: 'Title and content are required.' });
  }
  try {
    const newPost = await prisma.blogPost.create({
      data: { title, content },
    });
    res.status(201).json({ ...newPost, comments: [] });
  } catch (err) {
    res.status(500).json({ error: 'Failed to create post.' });
  }
});

// GET /api/posts/:id
app.get('/api/posts/:id', async (req, res) => {
  const postId = parseInt(req.params.id);
  try {
    const post = await prisma.blogPost.findUnique({
      where: { id: postId },
      include: { comments: true },
    });
    if (!post) {
      return res.status(404).json({ error: 'Post not found.' });
    }
    res.json(post);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch post.' });
  }
});

// POST /api/posts/:id/comments
app.post('/api/posts/:id/comments', async (req, res) => {
  const postId = parseInt(req.params.id);
  const { content } = req.body;
  if (!content) {
    return res.status(400).json({ error: 'Comment content is required.' });
  }
  try {
    // Ensure post exists
    const post = await prisma.blogPost.findUnique({ where: { id: postId } });
    if (!post) {
      return res.status(404).json({ error: 'Post not found.' });
    }
    const newComment = await prisma.comment.create({
      data: { content, postId },
    });
    res.status(201).json(newComment);
  } catch (err) {
    res.status(500).json({ error: 'Failed to add comment.' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); 