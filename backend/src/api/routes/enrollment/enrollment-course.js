import express from 'express';
import pkg from '@prisma/client';
import createHttpError from 'http-errors';
import {
  body, param,
} from 'express-validator';
// eslint-disable-next-line import/extensions
import { validate } from '../../validation/validate.js';

const router = express.Router();
const { PrismaClient, TokenType } = pkg;
const prisma = new PrismaClient();

async function getEnrollment(userId) {
  const courses = await prisma.course.findMany({
    where: {
      members: {
        some: {
          userId,
        },
      },
    },
  });
  return courses;
}

async function postEnrollment(userId, payload) {
  const courses = await prisma.course.find({
    data: {
      user: {
        connect: {
          id: userId,
        },
      },
      course: {
        connect: {
          id: payload.courseId,
        },
      },
      role: payload.role,
    },
  });
  return courses;
}

async function deleteEnrollment(userId, courseId) {
  const courses = await prisma.course.find({
    where: {
      id: Number(userId),
      course: courseId,
    },
  });
  return courses;
}

router.get('/:id/courses', validate([
  param('id')
    .isNumeric()
    .withMessage('Id is not a number'),
]), (req, res, next) => getEnrollment(req.params.id)
  .then((data) => res.json(data))
  .catch((error) => {
    const httpError = createHttpError(500, error);
    // eslint-disable-next-line promise/no-callback-in-promise
    next(httpError);
  }));

router.post('/:id/course', validate([
  param('id')
    .isNumeric()
    .withMessage('Id is not a number'),
  body('role')
    .isString()
    .withMessage('name must be a string'),
  body('payload-courseid')
    .isNumeric(),
]), (req, res, next) => {
  const {
    name, date,
  } = req.body;
  postEnrollment(name, date, req.params.id)
    .then(() => res.json({ message: 'CourseEnrollment created successfully' }))
    .catch((error) => {
      const httpError = createHttpError(500, error);
      // eslint-disable-next-line promise/no-callback-in-promise
      next(httpError);
    });
});

router.delete('/:id/course/:courseId', validate([
  param('id')
    .isNumeric()
    .withMessage('Id is not a number'),
  param('courseId')
    .isNumeric()
    .withMessage('Id is not a number'),
]), (req, res, next) => deleteEnrollment(req.params.id)
  .then(() => res.json({ message: 'CourseEnrollment is deleted successfully' }))
  .catch((error) => {
    const httpError = createHttpError(500, error);
    // eslint-disable-next-line promise/no-callback-in-promise
    next(httpError);
  }));
export default router;
