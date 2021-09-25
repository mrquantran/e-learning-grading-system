/* eslint-disable import/extensions */
/* eslint-disable max-len */
import pkg from '@prisma/client';
import { add } from 'date-fns';
import sendgrid from '@sendgrid/mail';
import {
  sendGridEmailKey, tokenInfo,
} from '../../../config.js';
import { sendEmailToken } from '../../plugin/email/email.js';

const { PrismaClient, TokenType } = pkg;
const prisma = new PrismaClient();

const { emailTokenLife } = tokenInfo;

function generateEmailToken() {
  return Math.floor(10000000 + Math.random() * 90000000).toString();
}

// eslint-disable-next-line consistent-return
const sendEmail = async (req, res) => {
  try {
    const { email: emailReq } = req.body;

    const emailUser = await prisma.user.findUnique({
      where: {
        email: emailReq,
      },
      select: {
        email: true,
      },
    });

    const { email } = emailUser;

    if (!email) {
      return res.status(403).json({ message: 'email not created' });
    }

    // 👇 generate an alphanumeric token
    // eslint-disable-next-line no-unused-vars
    const emailToken = generateEmailToken();
    // 👇 create a date object for the email token expiration
    const tokenExpiration = add(new Date(), {
      minutes: emailTokenLife,
    });

    if (!sendGridEmailKey) {
      res.status(500).json({ message: 'The SENDGRID_API_KEY env var must be set, otherwise the API won\'t be able to send emails. Using debug mode which logs the email tokens instead.' });
    } else {
      sendgrid.setApiKey(sendGridEmailKey);
    }

    // 👇 create a short lived token and update user or create if they don't exist
    // eslint-disable-next-line no-unused-vars
    const createdToken = await prisma.token.create({
      data: {
        emailToken,
        type: TokenType.EMAIL,
        expiration: tokenExpiration,
        user: {
          connectOrCreate: {
            create: {
              email,
            },
            where: {
              email,
            },
          },
        },
      },
    });

    // 👇 send the email token
    await sendEmailToken(email, emailToken);

    return res.status(200).json({
      message: 'email sent successfully',
      email,
      emailToken,
    });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
    return res.status(500).json({ message: error });
  }
};

export default sendEmail;
