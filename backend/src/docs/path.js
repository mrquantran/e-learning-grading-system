/* eslint-disable import/extensions */
import tests from './tests/index.js';
import courses from './courses/index.js';
import testResult from './testResult/index.js';
import account from './account/index.js';
import enrollCourse from './enrollment/index.js';
import users from './user/index.js';
import lectures from './lectures/index.js';

const path = {
  paths: {
    ...account,
    ...courses,
    ...lectures,
    ...enrollCourse,
    ...tests,
    ...testResult,
    ...users,
  },
};

export default path;
