/* eslint-disable import/extensions */
import createSection from './createSection.js';
import deleteSection from './deleteSection.js';
import getLectureByCourseId from './lectureByCourseId.js';
import updateCurriculumItems from './updateCurriculumItems.js';

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
  'courses/{id}/instructor-curriculum-items': {
    ...updateCurriculumItems,
  },
};

export default pathCourses;
