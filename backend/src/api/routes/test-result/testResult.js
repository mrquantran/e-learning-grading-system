/* eslint-disable promise/no-callback-in-promise */
import express from 'express';
import pkg from '@prisma/client';
import createHttpError from 'http-errors';

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
  if (result == null || studentId == null || graderId == null || testId == null) {
    // eslint-disable-next-line no-console
    console.log('You must provide all fields');
    // eslint-disable-next-line no-useless-return
    return;
  }

  if (result < 0 || result > 1000) {
    // eslint-disable-next-line no-console
    console.log('Field error: 0 < result < 1000');
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

async function updateTestResult(id, result, studentId, graderId) {
  if (id == null || result == null || studentId == null || graderId == null) {
    // eslint-disable-next-line no-console
    console.log('You must provide all fields');
    // eslint-disable-next-line no-useless-return
    return;
  }

  if (result < 0 || result > 1000) {
    // eslint-disable-next-line no-console
    console.log('Field error: 0 < result < 1000');
    return;
  }
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

router.get('/:id/test-results', (req, res, next) => getTestResult(req.params.id)
  .then((data) => res.json(data))
  .catch((error) => {
    const httpError = createHttpError(500, error);
    next(httpError);
  }));

router.post('/:id/test-results', (req, res, next) => {
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

router.delete('/test-results/:id', (req, res, next) => deleteTestResult(req.params.id)
  .then((data) => res.json(data))
  .catch((error) => {
    const httpError = createHttpError(500, error);
    next(httpError);
  }));

router.patch('/test-results/:id', (req, res, next) => {
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
