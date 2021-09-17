import express from 'express';
import pkg from '@prisma/client';

const router = express.Router();
const { PrismaClient } = pkg;
const prisma = new PrismaClient();

router.get('/', async (req, res) => {
  const courses = await prisma.course.findMany();
  res.json(courses);
});

export default router;
