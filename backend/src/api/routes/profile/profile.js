/* eslint-disable import/named */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-unused-vars */
/* eslint-disable promise/no-callback-in-promise */
import express from 'express';

import validateAPIToken from '../../middleware/validateToken.js';
import isAuth from '../../middleware/auth.js';

const router = express.Router();

router.post('/');

router.use(isAuth, validateAPIToken);

export default router;
