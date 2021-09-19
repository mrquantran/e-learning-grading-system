/* eslint-disable no-unused-vars */
/* eslint-disable import/extensions */
/* eslint-disable promise/no-callback-in-promise */
import express from 'express';
import pkg from '@prisma/client';
import createHttpError from 'http-errors';
import { body } from 'express-validator';
import { validate } from '../../validation/validate.js';

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

async function createCourse(name, courseDetails, userId) {
  // when creating a course make the authenticated user a teacher of the course
  const createdCourse = await prisma.course.create({
    data: {
      name,
      courseDetails,
      // members: {
      //   create: {
      //     role: 'TEACHER',
      //     user: {
      //       connect: {
      //         id: userId,
      //       },
      //     },
      //   },
      // },
    },
  });

  return createdCourse;
}

// GET courses
router.get('/', (req, res, next) => getCourses().then(() => {
  const message = 'Created succesfully';
  return res.json({ message });
}).catch((error) => {
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

// POST courses
router.post('/', validate([
  body('name').notEmpty(),
  body('courseDetails').notEmpty().isLength({ min: 20 }),
]), (req, res, next) => {
  const { name, courseDetails } = req.body;

  createCourse(name, courseDetails)
    .then((createdCourse) => res.json(createdCourse))
    .catch((error) => {
      // 500 (Internal Server Error) - Something has gone wrong in your application.
      const httpError = createHttpError(500, error);
      next(httpError);
    });
});

export default router;
