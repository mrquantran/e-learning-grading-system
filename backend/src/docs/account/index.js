/* eslint-disable import/extensions */
import login from './login.js';
import auth from './auth.js';
import email from './email.js';
import signup from './signup.js';

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
  '/signup': {
    ...signup,
  },
};

export default pathAccount;
