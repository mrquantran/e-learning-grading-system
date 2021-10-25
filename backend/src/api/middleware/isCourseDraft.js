/* eslint-disable import/prefer-default-export */
/* eslint-disable no-tabs */
/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable max-len */
/* eslint-disable import/extensions */
// import * as jwtHelper from '../helpers/jwt.helper.js';
// import accessTokenSecret from '../../config.js';

import pkg from '@prisma/client';
import { isAuth } from './auth.js';

/**
 * Middleware: Authorization user by Token
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */

const { PrismaClient } = pkg;
const prisma = new PrismaClient();

// eslint-disable-next-line consistent-return
export const isCourseDraft = async (req, res, next) => {
  const { id } = req.params;

  try {
    const { isDraft } = await prisma.course.findUnique({
      where: {
        id: Number(id),
      },
      select: {
        isDraft: true,
      },
    });

    if (isDraft) {
      try {
        await isAuth(req, res, next);
      } catch (error) {
        return res.status(401).send({
          message: 'have problem. try again',
        });
      }
      // await isTeacherEnroll(req, res, next);
      // next();
    } else {
      next();
    }
  } catch (error) {
    return res.status(403).send({
      message: 'you do not have permission to perform detail',
    });
  }
};
