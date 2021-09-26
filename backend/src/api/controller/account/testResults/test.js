/* eslint-disable promise/no-callback-in-promise */
import express from 'express';
import pkg from '@prisma/client';
import createHttpError from 'http-errors';
import {
  body, param,
} from 'express-validator';
// eslint-disable-next-line import/extensions
import { validate } from '../../../validation/validate.js';

const router = express.Router();
const { PrismaClient } = pkg;
const prisma = new PrismaClient();

async function getTest(id) {
  const test = await prisma.test.findMany({
    where: {
      testId: Number(id),
    },
  });
  return test;
}

async function createTest(courseID, role, name) {
  const test = await prisma.test.create({
    data: {
      courseID: Number(courseID),
      name,
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

async function updateTest(id, newtest) {
  const test = await prisma.testResult.update({
    where: {
      id: Number(id),
    },
    data: {
      newtest,
    },
  });
  return test;
}

router.get('test/:id', validate([
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

router.put('test/:id', validate([
  param('id')
    .isNumeric()
    .withMessage('Id is not a number'),
  body('name')
    .isString()
    .withMessage('name must be a string')
    .notEmpty()
    .withMessage('name is empty'),
  body('courseId ')
    .isNumeric()
    .withMessage('courseId  must be a number')
    .notEmpty()
    .withMessage('courseId  is empty'),

]), (req, res, next) => {
  const {
    result, studentId,
  } = req.body;
  createTest(result, studentId, req.params.id)
    .then((data) => res.json(data))
    .catch((error) => {
      const httpError = createHttpError(500, error);
      next(httpError);
    });
});

router.delete('test/:id', validate([
  param('id')
    .isNumeric()
    .withMessage('Id is not a number'),
]), (req, res, next) => deleteTest(req.params.id)
  .then((data) => res.json(data))
  .catch((error) => {
    const httpError = createHttpError(500, error);
    // eslint-disable-next-line promise/no-callback-in-promise
    next(httpError);
  }));

router.patch('test/:id', validate([
  param('id')
    .isNumeric()
    .withMessage('Id is not a number'),
]), (req, res, next) => {
  const {
    newtest,
  } = req.body;
  updateTest(req.params.id, newtest)
    .then((data) => res.json(data))
    .catch((error) => {
      const httpError = createHttpError(500, error);
      next(httpError);
    });
});

export default router;
