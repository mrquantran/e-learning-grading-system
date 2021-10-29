/* eslint-disable import/prefer-default-export */
/* eslint-disable no-tabs */
/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable max-len */
/* eslint-disable import/extensions */
// import * as jwtHelper from '../helpers/jwt.helper.js';
// import accessTokenSecret from '../../config.js';

import pkg from '@prisma/client';
import { getDecodedToken } from '../auth.helper.js';

/**
 * Middleware: Authorization user by Token
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */

const { PrismaClient } = pkg;
const prisma = new PrismaClient();

// eslint-disable-next-line consistent-return
// eslint-disable-next-line no-unused-vars
export const isTeacherEnroll = async (req, res) => {
  const token = await getDecodedToken(req);

  const { id } = req.params;
  try {
    const enroll = await prisma.courseEnrollment.findUnique({
      where: {
        userId_courseId: {
          courseId: Number(id),
          userId: Number(token.id),
        },
      },
    });

    if (enroll === null) {
      return false;
    }
    // Cho phép req đi tiếp sang controller.
    // next();
    return true;
  } catch (error) {
    // return res.status(403).send({
    //   message: 'You do not have permission to perform this action.',
    // });
  }
};

export const isTeacherEnrollWithLectureId = async (req, res) => {
  const token = await getDecodedToken(req);

  const { id } = req.params;
  try {
    const { courseId } = await prisma.lectures.findUnique({
      where: {
        id: Number(id),
      },
      select: {
        courseId: true,
      },
    });

    const enroll = await prisma.courseEnrollment.findUnique({
      where: {
        userId_courseId: {
          courseId: Number(courseId),
          userId: Number(token.id),
        },
      },
    });

    if (enroll === null) {
      return false;
    }
    // Cho phép req đi tiếp sang controller.
    // next();
    return true;
  } catch (error) {
    // return res.status(403).send({
    //   message: 'You do not have permission to perform this action.',
    // });
  }
};
