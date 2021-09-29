/* eslint-disable import/extensions */
import express from 'express';
// import login from './user/login.js';
// import signup from './courses/signup.js';
import coursesList from './courses/coursesList.js';
import testResults from './test-result/testResult.js';
import users from './user/user.js';

import login from './account/login.js';
import email from './account/email.js';
import auth from './account/auth.js';
import signup from './account/register.js';

const router = express.Router();

/*-------------------------------------------------------------------------*/
// Below all APIs are public APIs protected by api-key
// router.use('/', apikey);
/*-------------------------------------------------------------------------*/

router.use('/courses', coursesList);
router.use('/courses/tests', testResults);
router.use('/users', users);

// Endpoint to login or register and to send the short lived token
router.use('/login', login);
// endpoint to login with email
router.use('/email', email);
// end point to authenticate when email was sent
router.use('/auth', auth);
// end pont to register or register
router.use('/signup', signup);

export default router;
