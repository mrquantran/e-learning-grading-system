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

import {
  createUser, getUsers, getUser, updateUser, deleteUser,
} from '../../controller/user/userController.js';

const router = express.Router();

router.post('/', validate([
  body('firstName').notEmpty().withMessage('Firstname is empty'),
  body('lastName').notEmpty().withMessage('Lastname is empty'),
  body('email').notEmpty().isEmail().withMessage('Email is not valid'),
  body('password').optional(),
]), createUser);

router.get('/', getUsers);

router.get('/:id', validate([
  param('id').notEmpty().isNumeric().withMessage('userId is empty'),
]), getUser);

router.put('/:id', validate([
  body('firstName').optional(),
  body('lastName').optional(),
  body('password').optional(),
]), updateUser);

router.delete('/:id', validate([
  param('id').notEmpty().isNumeric().withMessage('userId is empty'),
]), deleteUser);

export default router;
