import sendgrid from '@sendgrid/mail';

export async function sendEmailToken(email, token) {
  const msg = {
    to: email,
    from: '1959030@itec.hcmus.edu.vn',
    subject: 'Login token for the modern backend API',
    text: `The login token for the API is: ${token}`,
  };

  await sendgrid.send(msg);
}

export async function debugSendEmailToken(email, token) {
  // eslint-disable-next-line no-console
  console.log(`email token for ${email}: ${token} `);
}
