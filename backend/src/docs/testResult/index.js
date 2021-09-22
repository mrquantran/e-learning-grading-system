/* eslint-disable import/extensions */
import getTestResultById from './testResultByTest.js';
import testResultId from './testResultsId.js';

const pathCourses = {
  '/courses/tests/{testId}/testresults': {
    ...getTestResultById,
  },
  '/courses/tests/testresults/{testResultId}': {
    ...testResultId,
  },
};

export default pathCourses;
