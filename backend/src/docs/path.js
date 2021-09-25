/* eslint-disable import/extensions */
import tests from './tests/index.js';
import courses from './courses/index.js';
import testResult from './testResult/index.js';
import account from './account/index.js';

const path = {
  paths: {
    ...account,
    ...courses,
    ...tests,
    ...testResult,
  },
};

export default path;
