/* eslint-disable import/extensions */
import express from 'express';
import {
  body,
  param,
} from 'express-validator';
import { validate } from '../../validation/validate.js';
import { isAuth } from '../../middleware/auth.js';
import { lectures } from '../../controller/lectures/lectures.js';

const router = express.Router();

router.get('/courses/:id/lectures', validate([param('id')
  .isNumeric()
  .withMessage('Id is not a number')]), isAuth, lectures.getLectureOfCourse);

router.post('/courses/:id/lectures/section', validate([param('id')
  .isNumeric()
  .withMessage('Id is not a number'), body('title')
  .notEmpty()
  .withMessage('title can not be empty')]), isAuth, lectures.createSection);

router.delete('/lectures/:id', validate([param('id')
  .isNumeric()
  .withMessage('Id is not a number')]), isAuth, lectures.deleteSection);

export default router;
