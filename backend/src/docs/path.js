/* eslint-disable import/extensions */
import tests from './tests/index.js';
import courses from './courses/index.js';
import testResult from './testResult/index.js';

const path = {
  paths: {
    ...tests,
    ...courses,
    ...testResult,
  },
};

export default path;
