/* eslint-disable import/extensions */
import express from 'express';
import { login } from '../../controller/user/login.js';

const router = express.Router();

router.post('/', login);

export default router;
