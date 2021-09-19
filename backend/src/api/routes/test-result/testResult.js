/* eslint-disable promise/no-callback-in-promise */
import express from 'express';
import pkg from '@prisma/client';
import createHttpError from 'http-errors';

const router = express.Router();
const { PrismaClient } = pkg;
const prisma = new PrismaClient();

async function getTestResult(id) {
//   console.log(id);
  const testResult = await prisma.testresult.findUnique({
    where: {
      id: 1,
    },
  });

  return testResult;
}

async function createTestResult(result, studentId, graderId, testId) {
//   result *= (1 / 10);
  const testResult = await prisma.testresult.create({
    data: {
      result,
      studentId,
      graderId,
      testId,
    },
  });
  return testResult;
}

// async function deleteTestResult(id) {
//     const
// }

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

export default router;
