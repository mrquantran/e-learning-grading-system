/* eslint-disable import/extensions */
import tests from './test.js';
import createTest from './testByCourseId.js';

const pathCourses = {
  '/courses/tests/{testId}': {
    ...tests,
  },
  '/courses/{coursesId}/tests': {
    ...createTest,
  },
};

export default pathCourses;
