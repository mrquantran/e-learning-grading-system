/* eslint-disable import/extensions */
import courses from './courses.js';
import getCoursesById from './getCourseById.js';

const pathCourses = {
  '/courses': {
    ...courses,
  },
  '/courses/{id}': {
    ...getCoursesById,
  },
};

export default pathCourses;
