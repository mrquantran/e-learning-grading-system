/* eslint-disable import/extensions */
import tests from './tests/index.js';
import courses from './courses/index.js';

const path = {
  paths: {
    ...tests,
    ...courses,
  },
};

export default path;
