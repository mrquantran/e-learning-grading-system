/* eslint-disable import/extensions */
import express from 'express';
// import login from './user/login.js';
// import signup from './courses/signup.js';
import coursesList from './courses/coursesList.js';
import testResults from './test-result/testResult.js';
import { login } from './user/login.js';

const router = express.Router();

/*-------------------------------------------------------------------------*/
// Below all APIs are public APIs protected by api-key
// router.use('/', apikey);
/*-------------------------------------------------------------------------*/

router.use('/courses', coursesList);
router.use('/courses/tests', testResults);

// Endpoint to login or regsiter and to send the short lived token
router.use('/login', login);
export default router;
