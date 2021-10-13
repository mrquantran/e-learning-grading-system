/* eslint-disable import/prefer-default-export */
/* eslint-disable no-tabs */
/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable max-len */
/* eslint-disable import/extensions */
// import * as jwtHelper from '../helpers/jwt.helper.js';
// import accessTokenSecret from '../../config.js';

import pkg from '@prisma/client';

/**
 * Middleware: Authorization user by Token
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */

const { PrismaClient } = pkg;
const prisma = new PrismaClient();

// eslint-disable-next-line consistent-return
export const isAuth = async (req, res, next) => {
  // Lấy token được gửi lên từ phía client, thông thường tốt nhất là các bạn nên truyền token vào header
 	const authHeader = req.header('Authorization');
  const tokenFromClient = authHeader && authHeader.split(' ')[1];

  if (tokenFromClient) {
    // Nếu tồn tại token
    try {
      const token = await prisma.token.findUnique({
        where: {
          accessToken: tokenFromClient,
        },
        select: {
          valid: true,
          expiration: true,
        },
      });

      if (!token) {
        return res.status(403).json({
          message: 'No token provided.',
        });
      }

      if (!token.valid) {
        return res.status(403).json({
          message: 'Token is invalid.',
        });
      }

      // Cho phép req đi tiếp sang controller.
      next();
    } catch (error) {
      // Nếu giải mã gặp lỗi: Không đúng, hết hạn...etc:
      return res.status(401).json({
        message: 'Unauthorized.',
      });
    }
  } else {
    // Không tìm thấy token trong request
    return res.status(403).send({
      message: 'No token provided.',
    });
  }
};
