/* eslint-disable no-console */

import pkg from '@prisma/client';
import createHttpError from 'http-errors';
import express from 'express';

const router = express.Router();
const { PrismaClient } = pkg;
const prisma = new PrismaClient();

async function getupcomingtest() {
  const listupcomingtest = await prisma.test.findMany({
    include: {
      course: {
        select: {
          name: true,
          courseDetails: true,
          members: {
            where: {
              role: 'TEACHER',
            },
            select: {
              user: {
                select: {
                  firstName: true,
                  lastName: true,
                },
              },
            },
          },
        },
      },
    },
  });
  listupcomingtest.sort((a, b) => a.date - b.date);
  return listupcomingtest.slice(0, 10);
  // return let listupcomingtest2 = objectmapper.readvalue(listupcomingtest1);
}

router.get('/upcoming', (req, res, next) => getupcomingtest()
  .then((data) => res.json(data))
  .catch((error) => {
    const httpError = createHttpError(500, error);
    // eslint-disable-next-line promise/no-callback-in-promise
    next(httpError);
  }));

export default router;
