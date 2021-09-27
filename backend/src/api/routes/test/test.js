/* eslint-disable consistent-return */
/* eslint-disable import/extensions */
import express from 'express';
import pkg from '@prisma/client';
import createHttpError from 'http-errors';
import {
  body, param,
} from 'express-validator';
// eslint-disable-next-line import/extensions
import { format, parse } from 'date-fns';
import { validate } from '../../validation/validate.js';
// import { isValidDate } from '../../constant/ENUM.js';

const router = express.Router();
const { PrismaClient } = pkg;
const prisma = new PrismaClient();

async function getTest(id) {
  const test = await prisma.test.findUnique({
    where: {
      id: Number(id),
    },
  });
  return test;
}

const formatDate = (dateString) => {
  if (!dateString) {
    return;
  }

  const date = parse(dateString, 'yyyy/MM/dd', new Date()); // not MM-DD-YY
  const result = format(date, "yyyy-MM-dd'T'HH:mm:ss.SSSxxx");

  return result;
};

async function createTest(name, date, courseId) {
  // format date
  const dateFormat = await formatDate(date);

  const test = await prisma.test.create({
    data: {
      name,
      date: dateFormat,
      course: {
        connect: {
          id: Number(courseId),
        },
      },
    },
  });
  return test;
}

async function deleteTest(id) {
  const test = await prisma.test.delete({
    where: {
      id: Number(id),
    },
  });

  return test;
}

async function updateTest(name, date, id) {
// format date
  const dateFormat = formatDate(date);

  const test = await prisma.test.update({
    where: {
      id: Number(id),
    },
    data: {
      name,
      date: dateFormat,
    },
  });
  return test;
}

router.get('/tests/:id', validate([
  param('id')
    .isNumeric()
    .withMessage('Id is not a number'),
]), (req, res, next) => getTest(req.params.id)
  .then((data) => res.json(data))
  .catch((error) => {
    const httpError = createHttpError(500, error);
    // eslint-disable-next-line promise/no-callback-in-promise
    next(httpError);
  }));

router.post('/:id/tests', validate([
  param('id')
    .isNumeric()
    .withMessage('Id is not a number'),
  body('name')
    .isString()
    .withMessage('name must be a string')
    .notEmpty()
    .withMessage('name is not empty'),
  body('date')
    .notEmpty()
    .withMessage('date is not empty')
    .isDate()
    .withMessage('date is not correct format'),
]), (req, res, next) => {
  const {
    name, date,
  } = req.body;

  createTest(name, date, req.params.id)
    .then(() => res.json({ message: 'Test created successfully' }))
    .catch((error) => {
      const httpError = createHttpError(500, error);
      // eslint-disable-next-line promise/no-callback-in-promise
      next(httpError);
    });
});

router.delete('/tests/:id', validate([
  param('id')
    .isNumeric()
    .withMessage('Id is not a number'),
]), (req, res, next) => deleteTest(req.params.id)
  .then(() => res.json({ message: 'Test is deleted successfully' }))
  .catch((error) => {
    const httpError = createHttpError(500, error);
    // eslint-disable-next-line promise/no-callback-in-promise
    next(httpError);
  }));

router.put('/tests/:id', validate([
  param('id')
    .isNumeric()
    .withMessage('Id is not a number'),
  body('name')
    .optional()
    .isString()
    .withMessage('name must be a string'),
  body('date')
    .optional()
    .isDate()
    .withMessage('date is not correct format'),
]), (req, res, next) => {
  const {
    name, date,
  } = req.body;
  updateTest(name, date, req.params.id)
    .then((data) => res.json(data))
    .catch((error) => {
      const httpError = createHttpError(500, error);
      // eslint-disable-next-line promise/no-callback-in-promise
      next(httpError);
    });
});

export default router;
