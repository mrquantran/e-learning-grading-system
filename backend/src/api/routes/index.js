/* eslint-disable import/extensions */
import express from 'express';
// import login from './user/login.js';
// import signup from './courses/signup.js';
import coursesList from './courses/coursesList.js';

const router = express.Router();

/*-------------------------------------------------------------------------*/
// Below all APIs are public APIs protected by api-key
// router.use('/', apikey);
/*-------------------------------------------------------------------------*/

// router.use('/login', login);

router.use('/courses', coursesList);
// router.use('/', signup);
// router.use('/courses', coursesList);

export default router;
