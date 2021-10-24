/* eslint-disable no-console */
/* eslint-disable import/extensions */
/* eslint-disable import/prefer-default-export */
import pkg from '@prisma/client';
import createHttpError from 'http-errors';
import { getDecodedToken } from '../../helpers/auth.helper.js';

const { PrismaClient } = pkg;
const prisma = new PrismaClient();

const getEnrollCourses = async (req, res) => {
  const token = await getDecodedToken(req);

  //   console.log(token);

  const courseEnroll = await prisma.user.findUnique({
    where: {
      id: Number(token.id),
    },
    select: {
      courses: {
        select: {
          course: true,
        },
      },
    },
  });

  const data = courseEnroll.courses.map((item) => item.course);

  return res.status(200).json(data);
};

async function getCoursePublic(req, res) {
  try {
    const courses = await prisma.course.findMany({
      where: {
        isPublic: true,
        isDraft: false,
      },
      select: {
        id: true,
        name: true,
        courseDetails: true,
        isPublic: true,
      },
    });
    return res.status(200).json(courses);
  } catch (error) {
  // 500 (Internal Server Error) - Something has gone wrong in your application.
    const httpError = createHttpError(500, error);
    return res.status(500).json({ message: httpError });
  }
}

async function createDraftCourse(req, res) {
  const { name } = req.body;

  const token = await getDecodedToken(req);

  try {
    // when creating a course make the authenticated user a teacher of the course
    await prisma.course.create({
      data: {
        name,
        isPublic: false,
        isDraft: true,
        members: {
          create: {
            role: 'TEACHER',
            user: {
              connect: {
                id: Number(token.id),
              },
            },
          },
        },
      },
    });

    const message = 'Your draft course has been created successfully';
    return res.status(200).json({ message });
  } catch (error) {
    console.log(error);
    // 500 (Internal Server Error) - Something has gone wrong in your application.
    const httpError = createHttpError(500, error);
    return res.status(500).json({ message: httpError });
  }
}

async function getDraftCourse(req, res) {
  const token = await getDecodedToken(req);

  try {
    // when creating a course make the authenticated user a teacher of the course
    const courses = await prisma.course.findMany({
      where: {
        isDraft: true,
        members: {
          every: {
            userId: Number(token.id),
          },
        },
      },
      select: {
        id: true,
        name: true,
        courseDetails: true,
        isDraft: true,

      },
    });

    return res.status(200).json(courses);
  } catch (error) {
    console.log(error);
    // 500 (Internal Server Error) - Something has gone wrong in your application.
    const httpError = createHttpError(500, error);
    return res.status(500).json({ message: httpError });
  }
}

export const coursesController = {
  getCoursePublic,
  getEnrollCourses,
  createDraftCourse,
  getDraftCourse,
};
