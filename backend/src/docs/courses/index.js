/* eslint-disable import/extensions */
import courses from './courses.js';
import courseId from './courseId.js';

const pathCourses = {
  '/courses': {
    ...courses,
  },
  '/courses/{id}': {
    ...courseId,
  },
};

export default pathCourses;
