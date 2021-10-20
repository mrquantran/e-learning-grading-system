/* eslint-disable import/extensions */
import express from 'express';
import {
  param,
} from 'express-validator';
import { validate } from '../../validation/validate.js';
import { isAuth } from '../../middleware/auth.js';
import { lectures } from '../../controller/lectures/lectures.js';

const router = express.Router();

router.get('/:id/lectures', validate([param('id')
  .isNumeric()
  .withMessage('Id is not a number')]), isAuth, lectures.getLectureOfCourse);

export default router;
