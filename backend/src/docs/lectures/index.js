/* eslint-disable import/extensions */

import getLectureByCourseId from './lectureByCourseId.js';

const pathCourses = {
  '/courses/{id}/lectures': {
    ...getLectureByCourseId,
  },
};

export default pathCourses;
