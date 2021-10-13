/* eslint-disable no-console */
/* eslint-disable no-plusplus */
/* eslint-disable consistent-return */
/* eslint-disable no-empty */
/* eslint-disable no-unused-vars */
import pkg from '@prisma/client';
import createHttpError from 'http-errors';

const { PrismaClient } = pkg;
const prisma = new PrismaClient();

const getTopScore = async (req, res, next) => {
  const listStudentsTopScore = [];
  try {
    const studentsTopScore = await prisma.user.findMany({
      select: {
        id: true,
        firstName: true,
        lastName: true,
        testResults: {
          select: {
            result: true,
          },
        },
      },
    });

    for (let i = 0; i < Object.keys(studentsTopScore).length; i++) {
      let totalScore = 0;
      for (let j = 0; j < Object.keys(studentsTopScore[i].testResults).length; j++) {
        totalScore += parseInt(studentsTopScore[i].testResults[j].result, 10);
      }
      listStudentsTopScore.push({
        id: studentsTopScore[i].id,
        firstName: studentsTopScore[i].firstName,
        lastName: studentsTopScore[i].lastName,
        totalScore,
      });
    }
    listStudentsTopScore.sort((a, b) => b.totalScore - a.totalScore);

    return res.status(200).json(listStudentsTopScore);
  } catch (err) {
    const httpError = createHttpError(500, err);
    next(httpError);
  }
};

export default getTopScore;
