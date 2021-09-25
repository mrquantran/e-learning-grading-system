/* eslint-disable import/extensions */
import express from 'express';
import authenticate from '../../controller/account/authenticate.js';

const router = express.Router();

router.post('/', authenticate);

export default router;
