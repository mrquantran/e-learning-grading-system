/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable import/extensions */
/* eslint-disable import/prefer-default-export */
import pkg from '@prisma/client';
// import { json } from 'body-parser';
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

const getFavoriteCourses = async (req, res) => {
  const token = await getDecodedToken(req);

  const favoriteCourses = await prisma.favoriteCourse.findMany({
    where: {
      userId: Number(token.id),
    },
  });

  if (!favoriteCourses) {
    return res.status(401).json({ message: 'userId is not existed' });
  }

  return res.status(200).json(favoriteCourses);
};

export const coursesController = {
  getEnrollCourses, getFavoriteCourses,
};
