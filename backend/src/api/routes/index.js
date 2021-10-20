/* eslint-disable import/extensions */
import express from 'express';
// import login from './user/login.js';
// import signup from './courses/signup.js';
import coursesList from './courses/coursesList.js';
import testResults from './test-result/testResult.js';
import coursesEnrollment from './enrollment/enrollmentCourse.js';
import testResultTopScore from './test-result/testResultTopScore.js';
import users from './user/user.js';

import test from './test/test.js';
import login from './account/login.js';
import email from './account/email.js';
import auth from './account/auth.js';
import signup from './account/register.js';
import enrollCourse from './enrollment/enrollCourse.js';

import lectures from './lectures/lectures.js';

const router = express.Router();

/*-------------------------------------------------------------------------*/
// Below all APIs are public APIs protected by api-key
// router.use('/', apikey);
/*-------------------------------------------------------------------------*/

// enrollment
router.use('/users', coursesEnrollment);
router.use('/', enrollCourse);

// courses
router.use('/courses', coursesList);

// test result
router.use('/courses/tests', testResults);

// lectures
router.use('/courses', lectures);

// router.use('/user/top', testResultTopScore);

router.use('/users', users);

// test
router.use('/courses', test);

// Endpoint to login or register and to send the short lived token
router.use('/login', login);
// endpoint to login with email
router.use('/email', email);
// end point to authenticate when email was sent
router.use('/auth', auth);
// end pont to register or register
router.use('/signup', signup);

export default router;
