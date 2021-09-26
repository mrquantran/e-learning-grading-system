/* eslint-disable import/extensions */
import express from 'express';
import { body } from 'express-validator';
import { REGEX_EMAIL, REGEX_PASSWORD } from '../../constant/auth.js';
import register from '../../controller/account/register.js';
import { validate } from '../../validation/validate.js';

const router = express.Router();

router.post('/', validate([
  body('email')
    .notEmpty()
    .withMessage('email can not be empty')
    .matches(REGEX_EMAIL)
    .withMessage('email is not a valid email address'),
  body('password')
    .notEmpty()
    .withMessage('password can not be empty')
    .matches(REGEX_PASSWORD)
    .withMessage('password is not a valid password'),
  body('firstName')
    .notEmpty()
    .withMessage('firstName can not be empty'),
  body('lastName')
    .notEmpty()
    .withMessage('lastName can not be empty'),
]), register);

export default router;
