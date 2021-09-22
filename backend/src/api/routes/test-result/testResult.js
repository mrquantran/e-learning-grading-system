/* eslint-disable no-unused-vars */
/* eslint-disable promise/no-callback-in-promise */
import express from 'express';
import pkg from '@prisma/client';
import createHttpError from 'http-errors';
import {
  body, param,
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
      student: {
        connect: { id: studentId },
      },
      gradedBy: {
        connect: { id: graderId },
      },
      test: {
        connect: {
          id: Number(testId),
        },
      },
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

async function updateTestResult(id, result) {
  const testResult = await prisma.testResult.update({
    where: {
      id: Number(id),
    },
    data: {
      result,
    },
  });
  // eslint-disable-next-line consistent-return
  return testResult;
}

router.get('/:id/testresults', validate([
  param('id')
    .isNumeric()
    .withMessage('Id is not a number'),
]), (req, res, next) => getTestResult(req.params.id)
  .then((data) => res.json(data))
  .catch((error) => {
    const httpError = createHttpError(500, error);
    next(httpError);
  }));

router.post('/:id/testresults', validate([
  param('id')
    .isNumeric()
    .withMessage('Id is not a number'),
  body('result').isInt({ min: 0, max: 1000 }).withMessage('0 < Result < 1000'),
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

]), (req, res, next) => {
  const {
    result, studentId, graderId,
  } = req.body;

  const { id } = req.params;

  createTestResult(result, studentId, graderId, id)
    .then(() => {
      const message = 'created successfully';
      return res.json({ message });
    })
    .catch((error) => {
      const httpError = createHttpError(500, error);
      next(httpError);
    });
});

router.delete('/testresults/:id', validate([
  param('id')
    .isNumeric()
    .withMessage('Id is not a number'),
]), (req, res, next) => deleteTestResult(req.params.id)
  .then(() => {
    const message = 'deleted successfully';
    return res.json({ message });
  })
  .catch((error) => {
    const httpError = createHttpError(500, error);
    next(httpError);
  }));

router.put('/testresults/:id', validate([
  param('id')
    .isNumeric()
    .withMessage('Id is not a number'),
  body('result').optional().isInt({ min: 0, max: 1000 }).withMessage('0 < Result < 1000'),
]), (req, res, next) => {
  const { result } = req.body;
  updateTestResult(req.params.id, result)
    .then((data) => res.json(data))
    .catch((error) => {
      const httpError = createHttpError(500, error);
      next(httpError);
    });
});

export default router;
