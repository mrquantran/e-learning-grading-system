/* eslint-disable import/extensions */
/* eslint-disable consistent-return */
import jwt from 'jsonwebtoken';
import { JWT_ALGORITHM } from '../constant/auth.js';
/**
 * private function generateToken
 * @param user
 * @param secretSignature
 * @param tokenLife
 */

// eslint-disable-next-line max-len
export const generateToken = (user, secretSignature, tokenLife) => new Promise((resolve, reject) => {
  // Định nghĩa những thông tin của user mà bạn muốn lưu vào token ở đây
  const { email, firstName, lastName } = user;
  // Thực hiện ký và tạo token
  jwt.sign(
    {
      data: {
        email,
        firstName,
        lastName,
      },
    },
    secretSignature,
    {
      algorithm: JWT_ALGORITHM,
      expiresIn: tokenLife,
    },
    (error, token) => {
      if (error) {
        // eslint-disable-next-line no-console
        console.log(error);
        return reject(error);
      }
      // eslint-disable-next-line no-console
      // console.log(token);
      resolve(token);
    },
  );
});

/**
 * This module used for verify jwt token
 * @param {*} token
 * @param {*} secretKey
 */
// eslint-disable-next-line import/prefer-default-export
export const verifyToken = (token, secretKey) => new Promise((resolve, reject) => {
  jwt.verify(token, secretKey, (error, decoded) => {
    if (error) {
      return reject(error);
    }
    resolve(decoded);
  });
});
