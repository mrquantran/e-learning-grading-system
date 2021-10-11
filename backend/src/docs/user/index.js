/* eslint-disable import/extensions */
import getUsers from './getUsers.js';
import user from './user.js';

const pathUsers = {
  '/users': {
    ...getUsers,
  },
  '/users/{userId}': {
    ...user,
  },
};

export default pathUsers;
