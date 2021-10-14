/* eslint-disable import/extensions */
import courses from './courses.js';
import courseId from './courseId.js';
import enrollCourse from './enrollCourse.js';
import courseIdStatus from './courseIdStatus.js';

const pathCourses = {
  '/courses': {
    ...courses,
  },
  '/courses/{id}/status': {
    ...courseIdStatus,
  },
  '/courses/{id}/enroll': {
    ...enrollCourse,
  },
  '/courses/{id}': {
    ...courseId,
  },
};

export default pathCourses;
