import express from 'express';
import login from './user/login';
import signup from './user/signup';
import coursesList from './courses/coursesList';

const router = express.Router();

/*-------------------------------------------------------------------------*/
// Below all APIs are public APIs protected by api-key
// router.use('/', apikey);
/*-------------------------------------------------------------------------*/

router.use('/login', login);
router.use('/signup', signup);
router.use('/courses', coursesList);

export default router;
