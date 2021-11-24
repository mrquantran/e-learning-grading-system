/* eslint-disable import/extensions */
import express from 'express';
import {
  body,
  param,
} from 'express-validator';
import { validate } from '../../validation/validate.js';
import { isAuth } from '../../middleware/auth.js';
import { quiz } from '../../controller/quiz/quiz.js';

const router = express.Router();

// router.get('/courses/:id/lectures', validate([param('id')
//   .isNumeric()
//   .withMessage('Id is not a number')]), isAuth, lectures.getLectureOfCourse);

// create quiz
router.post('/lectures/:id/quiz', validate([
  param('id')
    .isNumeric()
    .withMessage('Id is not a number'),
  body('title')
    .notEmpty()
    .withMessage('Title can not be empty')]), isAuth, quiz.createQuiz);

// router.delete('/lectures/:id', validate([param('id')
//   .isNumeric()
//   .withMessage('Id is not a number')]), isAuth, lectures.deleteSection);

export default router;
