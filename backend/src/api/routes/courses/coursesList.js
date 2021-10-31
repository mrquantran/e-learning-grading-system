/* eslint-disable array-callback-return */
/* eslint-disable consistent-return */
/* eslint-disable no-unused-vars */
/* eslint-disable import/extensions */
/* eslint-disable promise/no-callback-in-promise */
import express from 'express';
import pkg from '@prisma/client';
import createHttpError from 'http-errors';
import {
  body, oneOf, param, validationResult,
} from 'express-validator';
import { validate } from '../../validation/validate.js';
import { isAuth } from '../../middleware/auth.js';
import { getDecodedToken } from '../../helpers/auth.helper.js';
import { coursesController } from '../../controller/course/course.js';
import { isCourseDraft } from '../../middleware/isCourseDraft.js';

const router = express.Router();
const { PrismaClient } = pkg;
const prisma = new PrismaClient();

async function getCourses() {
  const courses = await prisma.course.findMany();
  return courses;
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

async function getCourseStatus(req) {
  const { id } = req.params;
  const token = await getDecodedToken(req);

  const courseById = await prisma.course.findUnique({
    where: {
      id: Number(id),
    },
    include: {
      favoriteCourse: {
        select: {
          user: {
            select: {
              email: true,
            },
          },
        },
      },
      members: {
        select: {
          role: true,
          user: {
            select: {
              firstName: true,
              lastName: true,
              email: true,
              social: true,
            },
          },
        },
        // include: {
        //   // role: true,
        //   user: true,
        // },
        // where: {
        //   role: 'TEACHER',
        // },
      },
    },
  });

  const members = courseById.members.map((user) => user.user);
  const userEnroll = members.some((user) => user.email === token.email);
  const favorite = courseById.favoriteCourse.some((user) => user.user.email === token.email);
  return { userEnroll, favorite };
}

// GET courses
router.get('/', (req, res, next) => coursesController.getCoursePublic(req, res));

router.get('/enroll', isAuth, (req, res) => coursesController.getEnrollCourses(req, res));

router.get('/draft', isAuth, (req, res) => coursesController.getDraftCourse(req, res));

// create post course
router.post('/', isAuth, validate([
  body('name')
    .notEmpty()
    .withMessage('name can not be empty'),
]), isAuth, (req, res) => coursesController.createDraftCourse(req, res));

// GET courses by id
router.get('/:id', validate([
  param('id')
    .isNumeric()
    .withMessage('Id is not a number'),
]), isCourseDraft, (req, res, next) => coursesController.getCourseById(req, res));

router.get('/:id/status', isAuth, validate([
  param('id')
    .isNumeric()
    .withMessage('Id is not a number'),
]), (req, res, next) => getCourseStatus(req)
  .then((data) => res.json(data))
  .catch((error) => {
  // 500 (Internal Server Error) - Something has gone wrong in your application.
    const httpError = createHttpError(500, error);
    next(httpError);
  }));

// PUT course
router.put('/:id', validate([
  param('id')
    .isNumeric()
    .withMessage('Id is not a number'),
  oneOf([
    body('name')
      .notEmpty()
      .withMessage('name can not be empty'),
    body('courseDetails')
      .notEmpty()
      .withMessage('course detail can not be empty')
      .isLength({ min: 20 })
      .withMessage('course detail must be at least 20 characters'),
  ]),
]), isAuth, (req, res) => coursesController.updateCourse(req, res));

router.delete('/:id', validate([
  param('id')
    .isNumeric()
    .withMessage('Id is not a number')]), isAuth,
(req, res, next) => coursesController.deleteCourse(req, res));

export default router;
