/* eslint-disable import/named */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-unused-vars */
/* eslint-disable promise/no-callback-in-promise */
import express from 'express';
import {
  body, param,
} from 'express-validator';
// eslint-disable-next-line import/extensions
import { validate } from '../../validation/validate.js';
// import controller from '../../controller/user/userController.js';

// import getTopScore from '../../controller/test-result/testResultController.js';

const router = express.Router();

// router.get('/', getTopScore);

export default router;
