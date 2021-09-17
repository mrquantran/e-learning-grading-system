/* eslint-disable import/extensions */
import getCourses from './get-courses.js';

const pathCourses = {
  paths: {
    '/courses': {
      ...getCourses,
    },
  },
};

export default pathCourses;
