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

const { PrismaClient } = pkg;
const prisma = new PrismaClient();

const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/g;

const createUser = async function (req, res, next) {
  const {
    firstName, lastName, email, password,
  } = req.body;
  try {
    const checkEmailExist = await prisma.user.findUnique({
      where: {
        email,
      },
      select: {
        email: true,
      },
    });

    // Check password: password does not matches the regex then return and notify error
    if (!PASSWORD_REGEX.test(password)) {
      return res.status(401).json({ message: 'Password should contain 6 characters, at least one uppercase letter, one lowercase letter and one number.' });
    }

    // Check whether the email exists
    if (checkEmailExist) {
      return res.status(401).json({ message: 'Email is existed' });
    }

    // Hash password
    const saltRounds = await bcrypt.genSalt(10);
    const passwordHash = bcrypt.hashSync(password, saltRounds);

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
    const users = await prisma.user.findMany({ orderBy: { id: 'asc' } });

    if (users == null) {
      return res.status(401).json({ message: 'Do not have any user.' });
    }

    return res.status(200).json({
      users,
    });
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

    return res.status(200).json({
      user,
    });
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
    console.log(password);
    if (PASSWORD_REGEX.test(password)) {
      console.log(password);
      // Hash new password
      const saltRounds = await bcrypt.genSalt(10);
      passwordHash = bcrypt.hashSync(password, saltRounds);
    } else {
      return res.status(401).json({ message: 'Password should contain 8 characters, at least one uppercase letter, one lowercase letter and one number.' });
    }
  }

  try {
    const user = await prisma.user.update({
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
      user,
    });
  } catch (err) {
    const httpError = createHttpError(500, err);
    next(httpError);
  }
};

const deleteUser = async function (req, res, next) {
  try {
    await prisma.user.delete({
      where: {
        id: Number(req.params.id),
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

export {
  createUser, getUsers, getUser, updateUser, deleteUser,
};
