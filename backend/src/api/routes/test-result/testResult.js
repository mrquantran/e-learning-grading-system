/* eslint-disable promise/no-callback-in-promise */
import express from 'express';
import pkg from '@prisma/client';
import createHttpError from 'http-errors';

const router = express.Router();
const { PrismaClient } = pkg;
const prisma = new PrismaClient();

async function getTestResult(id) {
//   console.log(id);
  const testResult = await prisma.testResult.findUnique({
    where: {
      id: Number(id),
    },
  });

  return testResult;
}

async function createTestResult(result, studentId, graderId, testId) {
  if (result == null || studentId == null || graderId == null || testId == null) {
    // eslint-disable-next-line no-console
    console.log('You must provide all fields');
    // eslint-disable-next-line no-useless-return
    return;
  }
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

async function updateTestResult(id, result, studentId, graderId, testId) {
  const testResult = await prisma.testResult.update({
    where: {
      id: Number(id),
    },
    data: {
      result,
      studentId,
      graderId,
      testId,
    },
  });
  return testResult;
}

router.get('/:id', (req, res, next) => getTestResult(req.params.id)
  .then((data) => res.json(data))
  .catch((error) => {
    const httpError = createHttpError(500, error);
    next(httpError);
  }));

router.post('/', (req, res, next) => {
  const {
    result, studentId, graderId, testId,
  } = req.body;
  createTestResult(result, studentId, graderId, testId)
    .then((data) => res.json(data))
    .catch((error) => {
      const httpError = createHttpError(500, error);
      next(httpError);
    });
});

router.delete('/:id', (req, res, next) => deleteTestResult(req.params.id)
  .then((data) => res.json(data))
  .catch((error) => {
    const httpError = createHttpError(500, error);
    next(httpError);
  }));

router.patch('/:id', (req, res, next) => {
  const {
    result, studentId, graderId, testId,
  } = req.body;
  updateTestResult(req.params.id, result, studentId, graderId, testId)
    .then((data) => res.json(data))
    .catch((error) => {
      const httpError = createHttpError(500, error);
      next(httpError);
    });
});

export default router;
