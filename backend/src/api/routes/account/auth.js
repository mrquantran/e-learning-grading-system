/* eslint-disable import/extensions */
import express from 'express';
import fetch from 'node-fetch';
import { clientURL, port } from '../../../config.js';
import authenticate from '../../controller/account/authenticate.js';

const router = express.Router();

const redirectAuth = async (req, res) => {
  const { id: emailToken, email } = req.params;

  if (!emailToken || !email) {
    res.status(401).json({ message: 'email token not have' });
  }

  const data = { emailToken, email };

  const authData = await fetch(`${clientURL}${port}/auth`, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: { 'Content-Type': 'application/json' },
  }).then((response) => response.json())
    .catch((error) => error.message);

  return res.status(200).json(authData);
};

router.post('/', authenticate);
router.get('/:id/:email', redirectAuth);

export default router;
