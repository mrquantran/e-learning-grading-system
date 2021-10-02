/* eslint-disable import/extensions */
import enrollment from './enrollment.js';
import deleteEnrollment from './delenrollment';

const pathCourses = {
  '/users/{userId}/courses': {
    ...enrollment,
  },
  '/users/{userId}/courses/{courseId}': {
    ...deleteEnrollment,
  },
};

export default pathCourses;
