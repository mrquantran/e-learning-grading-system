/* eslint-disable import/extensions */
import express from 'express';
import { body } from 'express-validator';
import { REGEX_EMAIL } from '../../constant/auth.js';
import sendEmail from '../../controller/account/email.js';
import { validate } from '../../validation/validate.js';

const router = express.Router();

router.post('/', validate([
  body('email')
    .notEmpty()
    .withMessage('email can not be empty')
    .matches(REGEX_EMAIL)
    .withMessage('email is not a valid email address'),
]), sendEmail);

export default router;
