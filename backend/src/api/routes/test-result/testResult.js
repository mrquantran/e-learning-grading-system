/* eslint-disable no-unused-vars */
/* eslint-disable promise/no-callback-in-promise */
import express from 'express';
import pkg from '@prisma/client';
import createHttpError from 'http-errors';
import {
  body, oneOf, param,
} from 'express-validator';
// eslint-disable-next-line import/extensions
import { validate } from '../../validation/validate.js';

const router = express.Router();
const { PrismaClient } = pkg;
const prisma = new PrismaClient();

async function getTestResult(id) {
//   console.log(id);
  const testResult = await prisma.testResult.findMany({
    where: {
      testId: Number(id),
    },
  });

  return testResult;
}

async function createTestResult(result, studentId, graderId, testId) {
  const testResult = await prisma.testResult.create({
    data: {
      result,
      studentId,
      graderId,
      testId,
    },
  });
  // eslint-disable-next-line consistent-return
  return testResult;
}

async function deleteTestResult(id) {
  const testResult = await prisma.testResult.delete({
    where: {
      id: Number(id),
    },
  });

  return testResult;
}

async function updateTestResult(id, result, studentId, graderId) {
  const testResult = await prisma.testResult.update({
    where: {
      id: Number(id),
    },
    data: {
      result,
      studentId,
      graderId,
    },
  });
  // eslint-disable-next-line consistent-return
  return testResult;
}

router.get('/:id/test-results', validate([
  param('id')
    .isNumeric()
    .withMessage('Id is not a number'),
]), (req, res, next) => getTestResult(req.params.id)
  .then((data) => res.json(data))
  .catch((error) => {
    const httpError = createHttpError(500, error);
    next(httpError);
  }));

router.post('/:id/test-results', validate([
  param('id')
    .isNumeric()
    .withMessage('Id is not a number'),
  oneOf([
    body('results')
      .if(body('results') < 0 || body('results') > 1000)
      .withMessage('Field error: 0 < result < 1000'),
    body('graderId')
      .isNumeric()
      .withMessage('graderId must be a number')
      .notEmpty()
      .withMessage('graderId is empty'),
    body('studentId')
      .isNumeric()
      .withMessage('studentId must be a number')
      .notEmpty()
      .withMessage('studentId is empty'),
  ]),

]), (req, res, next) => {
  const {
    result, studentId, graderId,
  } = req.body;
  createTestResult(result, studentId, graderId, req.params.id)
    .then((data) => res.json(data))
    .catch((error) => {
      const httpError = createHttpError(500, error);
      next(httpError);
    });
});

router.delete('/test-results/:id', validate([
  param('id')
    .isNumeric()
    .withMessage('Id is not a number'),
]), (req, res, next) => deleteTestResult(req.params.id)
  .then((data) => res.json(data))
  .catch((error) => {
    const httpError = createHttpError(500, error);
    next(httpError);
  }));

router.patch('/test-results/:id', validate([
  param('id')
    .isNumeric()
    .withMessage('Id is not a number'),
  body('results')
    .if(body('results') < 0 || body('results') > 1000)
    .withMessage('Field error: 0 < result < 1000'),

]), (req, res, next) => {
  const {
    result, studentId, graderId,
  } = req.body;
  updateTestResult(req.params.id, result, studentId, graderId)
    .then((data) => res.json(data))
    .catch((error) => {
      const httpError = createHttpError(500, error);
      next(httpError);
    });
});

export default router;
