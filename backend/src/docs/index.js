/* eslint-disable import/extensions */
import basicInfo from './basicInfo.js';
import server from './server.js';
import tags from './tag.js';
import courses from './courses/index.js';
import components from './components.js';

const docs = {
  ...basicInfo,
  ...server,
  ...tags,
  ...components,
  ...courses,
};

export default docs;
