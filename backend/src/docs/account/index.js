/* eslint-disable import/extensions */
import login from './login.js';
import auth from './auth.js';

const pathAccount = {
  '/login': {
    ...login,
  },
  '/auth': {
    ...auth,
  },
};

export default pathAccount;
