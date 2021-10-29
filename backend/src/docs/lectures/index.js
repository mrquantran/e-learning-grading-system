/* eslint-disable import/extensions */
import createSection from './createSection.js';
import deleteSection from './deleteSection.js';
import getLectureByCourseId from './lectureByCourseId.js';

const pathCourses = {
  '/courses/{id}/lectures': {
    ...getLectureByCourseId,
  },
  '/courses/{id}/lectures/section': {
    ...createSection,
  },
  'lectures/{id}': {
    ...deleteSection,
  },
};

export default pathCourses;
