/* eslint-disable import/extensions */
/* eslint-disable max-len */
import pkg from '@prisma/client';
import { add } from 'date-fns';
import { tokenInfo, accessTokenSecret, refreshTokenSecret } from '../../../config.js';
import * as jwtHelper from '../../helpers/jwt.helper.js';

const { PrismaClient, TokenType } = pkg;
const prisma = new PrismaClient();

const { accessTokenLife, refreshTokenLife } = tokenInfo;

/* eslint-disable import/extensions */
const authenticateHandler = async (req, res) => {
  const { email, emailToken } = req.body;

  try {
    // Get short lived email token
    const fetchedEmailToken = await prisma.token.findUnique({
      where: {
        emailToken,
      },
      include: {
        user: true,
      },
    });

    if (!fetchedEmailToken.valid) {
      // If the token doesn't exist or is not valid, return 401 unauthorized
      return res.status(401).json({ message: 'Token doesn\'t exist or is not valid' });
    }

    if (fetchedEmailToken.expiration < new Date()) {
      // If the token has expired, return 401 unauthorized
      return res.status(401).json({ message: 'Token has expired' });
    }

    // If token matches the user email passed in the payload, generate long lived API token
    if (fetchedEmailToken.user.email === email) {
      const tokenExpiration = add(new Date(), {
        minutes: accessTokenLife,
      });

      const accessToken = await jwtHelper.generateToken(email, accessTokenSecret, accessTokenLife);

      const refreshToken = await jwtHelper.generateToken(email, refreshTokenSecret, refreshTokenLife);

      // Persist token in DB so it's stateful
      // eslint-disable-next-line no-unused-vars
      const createdToken = await prisma.token.create({
        data: {
          accessToken,
          refreshToken,
          type: TokenType.API,
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

      // Invalidate the email token after it's been used
      await prisma.token.update({
        where: {
          id: fetchedEmailToken.id,
        },
        data: {
          valid: false,
        },
      });

      return res.status(200).json({ accessToken, refreshToken, message: 'email is authenticated' });
    }
    return res.status(403).json({ message: 'can not authorized' });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
    return res.status(500).json({ message: error });
  }
};

export default authenticateHandler;
