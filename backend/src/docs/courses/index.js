/* eslint-disable import/extensions */
import getCourses from './get-courses.js';
import getCoursesById from './getCourseById.js';

const pathCourses = {
  '/courses': {
    ...getCourses,
    ...getCoursesById,
  },
};

export default pathCourses;
