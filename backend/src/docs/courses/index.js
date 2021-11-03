/* eslint-disable import/extensions */
import courses from './courses.js';
import courseId from './courseId.js';
import enrollCourse from './enrollCourse.js';
import courseIdStatus from './courseIdStatus.js';
import getCourseEnroll from './getCourseEnroll.js';
import getDraftCourse from './getDraftCourse.js';
import publishCourse from './publishCourse.js';
import enrollCourseAsInstructor from './enrollCourseAsInstructor.js';

const pathCourses = {
  '/courses': {
    ...courses,
  },
  '/courses/{id}/status': {
    ...courseIdStatus,
  },
  '/courses/{id}/publish': {
    ...publishCourse,
  },
  '/courses/{id}/enroll': {
    ...enrollCourse,
  },
  '/courses/{id}/course-has-instructor': {
    ...enrollCourseAsInstructor,
  },
  '/courses/enroll': {
    ...getCourseEnroll,
  },
  '/courses/draft': {
    ...getDraftCourse,
  },

  '/courses/{id}': {
    ...courseId,
  },

};

export default pathCourses;
