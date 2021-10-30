/* eslint-disable import/extensions */
import createLectureMaterial from './createLectureMaterial.js';
import deleteMaterialLecture from './deleteLectureMaterial.js';

const pathCourses = {
  'lectures/{id}/lectures-material': {
    ...createLectureMaterial,
  },
  'lecture-material/{id}': {
    ...deleteMaterialLecture,
  },
};

export default pathCourses;
