/* eslint-disable import/extensions */
import getTestResultById from './getTestResultById.js';

const pathCourses = {
  '/testresults': {
    ...getTestResultById,
  },
};

export default pathCourses;
