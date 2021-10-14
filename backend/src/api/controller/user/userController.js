/* eslint-disable no-lonely-if */
/* eslint-disable import/extensions */
/* eslint-disable no-shadow */
/* eslint-disable no-else-return */
/* eslint-disable prefer-const */
/* eslint-disable no-console */
/* eslint-disable no-useless-escape */
/* eslint-disable import/no-unresolved */
/* eslint-disable consistent-return */
/* eslint-disable func-names */
/* eslint-disable no-unused-vars */
/* eslint-disable promise/no-callback-in-promise */
import pkg from '@prisma/client';
import createHttpError from 'http-errors';
import bcrypt from 'bcrypt';
import { REGEX_PASSWORD, PASSWORD_DEFAULT } from '../../constant/auth.js';

const { PrismaClient } = pkg;
const prisma = new PrismaClient();

// const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/g;

const createUser = async function (req, res, next) {
  const {
    firstName, lastName, email, password,
  } = req.body;

  let storePassword = password;

  try {
    const checkEmailExist = await prisma.user.findUnique({
      where: {
        email,
      },
      select: {
        email: true,
      },
    });

    // Check whether the email exists
    if (checkEmailExist) {
      return res.status(401).json({ message: 'Email is existed' });
    }

    if (storePassword.isEmpty()) {
      storePassword = PASSWORD_DEFAULT;
    } else {
      // Check password if not empty:
      // password does not matches the regex then return and notify error
      if (!REGEX_PASSWORD.test(storePassword)) {
        return res.status(401).json({ message: 'Password should contain 8 characters, at least one uppercase letter, one lowercase letter and one number.' });
      }
    }

    // Hash password
    const saltRounds = await bcrypt.genSalt(10);
    const passwordHash = bcrypt.hashSync(storePassword, saltRounds);

    await prisma.user.create({
      data: {
        email,
        firstName,
        lastName,
        password: passwordHash,
      },
    });

    return res.status(200).json({
      message: 'Create user successfully',
    });
  } catch (err) {
    const httpError = createHttpError(500, err);
    next(httpError);
  }
};

const getUsers = async function (req, res, next) {
  try {
    const users = await prisma.user.findMany({
      orderBy: { id: 'asc' },
    });

    if (users == null) {
      return res.status(401).json({ message: 'Do not have any user.' });
    }

    return res.status(200).json(users);
  } catch (err) {
    const httpError = createHttpError(500, err);
    next(httpError);
  }
};

const getUser = async function (req, res, next) {
  try {
    const user = await prisma.user.findUnique({
      where: {
        id: Number(req.params.id),
      },
    });

    if (user == null) {
      return res.status(401).json({ message: 'User does not exist' });
    }

    return res.status(200).json(user);
  } catch (err) {
    const httpError = createHttpError(500, err);
    next(httpError);
  }
};

const updateUser = async function (req, res, next) {
  const { firstName, lastName, password } = req.body;
  let passwordHash;

  // Check new password
  if (password != null) {
    if (REGEX_PASSWORD.test(password)) {
      // Hash new password
      const saltRounds = await bcrypt.genSalt(10);
      passwordHash = bcrypt.hashSync(password, saltRounds);
    } else {
      return res.status(401).json({ message: 'Password should contain 8 characters, at least one uppercase letter, one lowercase letter and one number.' });
    }
  }

  try {
    await prisma.user.update({
      where: {
        id: Number(req.params.id),
      },
      data: {
        firstName,
        lastName,
        password: passwordHash,
      },
    });

    return res.status(200).json({
      message: 'Update user successfully',
    });
  } catch (err) {
    const httpError = createHttpError(500, err);
    next(httpError);
  }
};

const deleteUser = async function (req, res, next) {
  const { id } = req.params.id;
  try {
    const checkUserExist = await prisma.user.findUnique({
      where: {
        id,
      },
      select: {
        id: true,
      },
    });

    if (!checkUserExist) {
      return res.status(401).json({ message: 'User is not existed' });
    }

    await prisma.user.delete({
      where: {
        id: Number(id),
      },
    });

    return res.status(200).json({
      message: 'Delete user successfully',
    });
  } catch (err) {
    const httpError = createHttpError(500, err);
    next(httpError);
  }
};

const getTopScore = async (req, res, next) => {
  const listStudentsTopScore = [];
  try {
    const studentsTopScore = await prisma.user.findMany({
      select: {
        id: true,
        firstName: true,
        lastName: true,
        testResults: {
          select: {
            result: true,
          },
        },
      },
    });

    for (let i = 0; i < Object.keys(studentsTopScore).length; i++) {
      let totalScore = 0;
      for (let j = 0; j < Object.keys(studentsTopScore[i].testResults).length; j++) {
        totalScore += parseInt(studentsTopScore[i].testResults[j].result, 10);
      }
      listStudentsTopScore.push({
        id: studentsTopScore[i].id,
        firstName: studentsTopScore[i].firstName,
        lastName: studentsTopScore[i].lastName,
        totalScore,
      });
    }
    listStudentsTopScore.sort((a, b) => b.totalScore - a.totalScore);

    let i = 1;
    listStudentsTopScore.map((student) => ({ rank: i++, ...student}));

    return res.status(200).json(listStudentsTopScore);
  } catch (err) {
    const httpError = createHttpError(500, err);
    next(httpError);
  }
};

export {
  createUser, getUsers, getUser, updateUser, deleteUser, getTopScore,
};
