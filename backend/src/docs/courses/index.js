/* eslint-disable import/extensions */
import courses from './courses.js';
import courseId from './courseId.js';
import enrollCourse from './enrollCourse.js';

const pathCourses = {
  '/courses': {
    ...courses,
  },
  '/courses/{id}/enroll': {
    ...enrollCourse,
  },
  '/courses/{id}': {
    ...courseId,
  },

};

export default pathCourses;
