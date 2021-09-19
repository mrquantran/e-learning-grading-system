/* eslint-disable promise/no-callback-in-promise */
import express from 'express';
import pkg from '@prisma/client';
import createHttpError from 'http-errors';

const router = express.Router();
const { PrismaClient } = pkg;
const prisma = new PrismaClient();

async function getCourses() {
  const courses = await prisma.course.findMany();
  return courses;
}

async function getCourseById(id) {
  const courseById = await prisma.course.findUnique({
    where: {
      id: Number(id),
    },
  });

  return courseById;
}

// GET courses
router.get('/', (req, res, next) => getCourses().then((coursesData) => res.json(coursesData)).catch((error) => {
  // 500 (Internal Server Error) - Something has gone wrong in your application.
  const httpError = createHttpError(500, error);
  next(httpError);
}));

// GET courses by id
router.get('/:id', (req, res, next) => getCourseById(req.params.id).then((courseById) => res.json(courseById)).catch((error) => {
  // 500 (Internal Server Error) - Something has gone wrong in your application.
  const httpError = createHttpError(500, error);
  next(httpError);
}));

export default router;
