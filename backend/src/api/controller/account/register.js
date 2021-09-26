/* eslint-disable import/extensions */
import pkg from '@prisma/client';
import bcrypt from 'bcrypt';
import { add } from 'date-fns';
import sendgrid from '@sendgrid/mail';
import { generateEmailToken } from '../../constant/auth.js';
import { sendEmailToken } from '../../plugin/email/email.js';

import { sendGridEmailKey, tokenInfo } from '../../../config.js';

const { PrismaClient, TokenType } = pkg;
const prisma = new PrismaClient();

const { emailTokenLife } = tokenInfo;

const signup = async (req, res) => {
  try {
    const {
      email, password, firstName, lastName,
    } = req.body;

    const emailUser = await prisma.user.findUnique({
      where: {
        email,
      },
      select: {
        email: true,
        password: true,
      },
    });

    if (emailUser) {
      return res.status(401).json({ message: 'email is existed' });
    }

    // salt
    const saltRounds = await bcrypt.genSalt(10);
    // now we set user password to hashed password
    const hash = bcrypt.hashSync(password, saltRounds);

    await prisma.user.create({
      data: {
        email,
        firstName,
        lastName,
        password: hash,
        active: false,
      },
    });

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
      message: 'register successfully. You need to confirm account in your email',
      email,
      emailToken,
    });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
    return res.status(500).json({ message: error });
  }
};

export default signup;
