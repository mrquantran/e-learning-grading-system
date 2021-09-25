/* eslint-disable import/extensions */
import express from 'express';
import sendEmail from '../../controller/account/email.js';

const router = express.Router();

router.post('/', sendEmail);

export default router;
