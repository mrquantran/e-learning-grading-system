/* eslint-disable import/extensions */
import getUsers from './getUsers.js';
import getTopScore from './getTopScore.js';
import user from './user.js';

const pathUsers = {
  '/users': {
    ...getUsers,
  },
  '/users/top': {
    ...getTopScore,
  },
  '/users/{userId}': {
    ...user,
  },
};

export default pathUsers;
