/* eslint-disable import/extensions */
import createSection from './createSection.js';
import getLectureByCourseId from './lectureByCourseId.js';

const pathCourses = {
  '/courses/{id}/lectures': {
    ...getLectureByCourseId,
  },
  '/courses/{id}/lectures/section': {
    ...createSection,
  },
};

export default pathCourses;
