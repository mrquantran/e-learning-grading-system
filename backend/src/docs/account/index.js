/* eslint-disable import/extensions */
import login from './login.js';
import auth from './auth.js';
import email from './email.js';

const pathAccount = {
  '/login': {
    ...login,
  },
  '/auth': {
    ...auth,
  },
  '/email': {
    ...email,
  },
};

export default pathAccount;
