/* eslint-disable import/extensions */
import express from 'express';
import pkg from '@prisma/client';
import createHttpError from 'http-errors';
import {
  param,
} from 'express-validator';
// eslint-disable-next-line import/extensions
import { validate } from '../../validation/validate.js';

const router = express.Router();
const { PrismaClient } = pkg;
const prisma = new PrismaClient();

async function getEnrollment(userId) {
  const courses = await prisma.course.findMany({
    where: {
      members: {
        some: {
          userId: Number(userId),
        },
      },
    },
  });
  return courses;
}

async function deleteEnrollment(userId, courseId) {
  const courses = await prisma.courseEnrollment.delete({
    where: {
      userId_courseId: {
        userId,
        courseId,
      },
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
