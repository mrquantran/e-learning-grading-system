/* eslint-disable import/extensions */
import sendgrid from '@sendgrid/mail';
import { port, clientURL } from '../../../config.js';
import emailTemplate from './newEmailTemplate.js';

export async function sendEmailToken(email, token) {
  const verifyURL = `${clientURL}${port}/auth/${token}`;
  const template = emailTemplate(email, verifyURL);

  const msg = {
    to: email,
    from: '1959030@itec.hcmus.edu.vn',
    subject: 'Login token for the modern backend API',
    html: `${template}`,
  };

  await sendgrid.send(msg);
}

export async function debugSendEmailToken(email, token) {
  // eslint-disable-next-line no-console
  console.log(`email token for ${email}: ${token} `);
}
