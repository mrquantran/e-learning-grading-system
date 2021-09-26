/* eslint-disable import/extensions */
import express from 'express';
import { body, param } from 'express-validator';
import fetch from 'node-fetch';
import { clientURL, port } from '../../../config.js';
import authenticate from '../../controller/account/authenticate.js';
import { validate } from '../../validation/validate.js';

const router = express.Router();

const redirectAuth = async (req, res) => {
  const { id: emailToken } = req.params;

  if (!emailToken) {
    res.status(401).json({ message: 'email token not have' });
  }

  const data = { emailToken };

  const authData = await fetch(`${clientURL}${port}/auth`, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: { 'Content-Type': 'application/json' },
  }).then((response) => response.json())
    .catch((error) => error.message);

  return res.status(200).json(authData);
};

router.post('/', validate([
  body('emailToken')
    .notEmpty()
    .withMessage('email token not have')
    .isNumeric()
    .withMessage('email token is not a number'),
]), authenticate);

router.get('/:id', validate([
  param('id')
    .notEmpty()
    .withMessage('email token not have')]),
redirectAuth);

export default router;
