/* eslint-disable import/extensions */
import express from 'express';
import {
  body,
  param,
} from 'express-validator';
import { validate } from '../../validation/validate.js';
import { isAuth } from '../../middleware/auth.js';
import { lecturesMaterial } from '../../controller/lecturesMaterial/lecturesMaterial.js';

const router = express.Router();

router.post('/lectures/:id/lectures-material', validate([param('id')
  .isNumeric()
  .withMessage('Id is not a number'), body('title')
  .notEmpty()
  .withMessage('Title can not be empty')]), isAuth, lecturesMaterial.createLecture);

router.delete('/lectures-material/:id', validate([param('id')
  .isNumeric()
  .withMessage('Id is not a number')]), isAuth, lecturesMaterial.deleteLecture);

router.put('/lectures-material/:id', validate([param('id')
  .isNumeric()
  .withMessage('Id is not a number')]), isAuth, lecturesMaterial.updateLecture);

export default router;
