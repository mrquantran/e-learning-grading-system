/* eslint-disable import/extensions */
/* eslint-disable import/prefer-default-export */
import pkg from '@prisma/client';
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

export const coursesController = {
  getEnrollCourses,
};
