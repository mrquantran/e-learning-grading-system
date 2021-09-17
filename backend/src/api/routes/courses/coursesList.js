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

/**
 * @swagger
 * components:
 *    schemas:
 *      Courses:
 *        type:object
 *        required:
 *          - name
 *          - courseDetails
 *        properties
 *          id:
 *            type: string
 *            description: The auto-generated id of the course.
 *          name:
 *            type:string
 *            description: the name of the course.
 *          courseDetails:
 *            type: strings
 *            description: the content of the course.
 *
 */

// routes/coursesList.js

/**
 * @swagger
 *  /courses:
 *    get:
 *      description: Use to request all courses
 *      responses:
 *          200:
 *            description: A successful response
 *          400:
 *            description: It's bad request
 *          500:
 *            description: It's internal server error
 */
router.get('/', (req, res, next) => getCourses().then((coursesData) => res.json(coursesData)).catch((error) => {
  // 500 (Internal Server Error) - Something has gone wrong in your application.
  const httpError = createHttpError(500, error);
  next(httpError);
}));

export default router;
