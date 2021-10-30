/* eslint-disable import/extensions */

import createLectureMaterial from './createLectureMaterial.js';

const pathCourses = {
  'lectures/{id}/lecture-material': {
    ...createLectureMaterial,
  },
};

export default pathCourses;
