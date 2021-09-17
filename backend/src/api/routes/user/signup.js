import express from 'express';
import { PrismaClient } from '@prisma/client';

const router = express.Router();
const prisma = new PrismaClient();

router.post('/signup', async (req, res) => {
  const { name, email, posts } = req.body;

  const postData = posts
    ? posts.map((post) => ({ title: post.title, content: post.content || undefined }))
    : [];

  const result = await prisma.user.create({
    data: {
      name,
      email,
      posts: {
        create: postData,
      },
    },
  });
  res.json(result);
});
