/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
/* eslint-disable no-console */
/* eslint-disable import/extensions */
/* eslint-disable import/prefer-default-export */
import pkg from '@prisma/client';
import createHttpError from 'http-errors';
// import { getDecodedToken } from '../../helpers/auth.helper.js';
import { isTeacherEnroll } from '../../helpers/course/isStudentEnroll.js';

const { PrismaClient } = pkg;
const prisma = new PrismaClient();

const getUserEnroll = async (req, res) => {
  try {
    const { id } = req.params;
    const { type } = req.query;

    if (!await isTeacherEnroll(req, res)) {
      return res.status(403).json({ message: 'you dont have permission to perform this action' });
    }

    if (type !== 'TEACHER' && type !== 'STUDENT') {
      return res.status(401).json({ message: 'Your type of user is not supported' });
    }

    let typeDefault = type;
    if (type === null) {
      typeDefault = 'STUDENT';
    }
    //   console.log(token);

    const courseEnroll = await prisma.courseEnrollment.findMany({
      where: {
        courseId: Number(id),
        role: typeDefault,
      },
      include: {
        user: {
          select: {
            id: true,
            email: true,
            firstName: true,
            lastName: true,
          },
        },
      },
    });

    const data = courseEnroll.map((item) => ({ ...item.user, role: typeDefault }));

    return res.status(200).json(data);
  } catch (error) {
  // 500 (Internal Server Error) - Something has gone wrong in your application.
    console.log(error);
    const httpError = createHttpError(500, error);
    return res.status(500).json({ message: httpError });
  }
};

export const coursesEnrollment = {
  getUserEnroll,
};
