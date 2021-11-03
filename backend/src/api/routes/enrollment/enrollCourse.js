/* eslint-disable import/extensions */
import express from 'express';
import pkg from '@prisma/client';
import createHttpError from 'http-errors';
import {
  body,
  param,
} from 'express-validator';
// eslint-disable-next-line import/extensions
import { validate } from '../../validation/validate.js';
import { isAuth } from '../../middleware/auth.js';
import { accessTokenSecret } from '../../../config.js';
import { coursesEnrollment } from '../../controller/courseEnrollment/courseEnrollment.js';
import * as jwtHelper from '../../helpers/jwt.helper.js';

const router = express.Router();
const { PrismaClient } = pkg;
const prisma = new PrismaClient();

async function postEnrollment(courseId, role, token) {
  const { data: jwtDecoded } = await jwtHelper.verifyToken(token, accessTokenSecret);

  const { id: userId } = jwtDecoded;

  const courses = await prisma.courseEnrollment.create({
    data: {
      user: {
        connect: {
          id: Number(userId),
        },
      },
      course: {
        connect: {
          id: Number(courseId),
        },
      },
      role,
    },
  });
  return courses;
}

router.get('/courses/:id/enroll', isAuth, validate([
  param('id')
    .isNumeric()
    .withMessage('Id is not a number'),
]), (req, res) => coursesEnrollment.getUserEnroll(req, res));

router.post('/courses/:id/course-has-instructor', isAuth,
  validate([
    body('email')
      .notEmpty()
      .withMessage('Email has not been exist')
      .isString()
      .withMessage('Email must be a string'),
  ]),
  (req, res) => coursesEnrollment.enrollCourseInstructor(req, res));

router.post('/courses/:id/enroll', isAuth, validate([
  param('id')
    .isNumeric()
    .withMessage('Id is not a number'),
]), (req, res, next) => {
  const authHeader = req.header('Authorization');
  const tokenFromClient = authHeader && authHeader.split(' ')[1];
  const { role } = req.body;

  postEnrollment(req.params.id, role, tokenFromClient)
    .then(() => res.json({ message: 'You have successfully enrolled for the course' }))
    .catch((error) => {
      const httpError = createHttpError(500, error);
      // eslint-disable-next-line promise/no-callback-in-promise
      next(httpError);
    });
});

export default router;
