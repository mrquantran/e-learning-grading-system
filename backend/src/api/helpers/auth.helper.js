/* eslint-disable import/extensions */
import { accessTokenSecret } from '../../config.js';
import * as jwtHelper from './jwt.helper.js';

export function getAccessToken(req) {
  const authHeader = req.header('Authorization');
  const tokenFromClient = authHeader && authHeader.split(' ')[1];
  return tokenFromClient;
}

export async function getDecodedToken(req) {
  const token = await getAccessToken(req);
  const { data } = await jwtHelper.verifyToken(token, accessTokenSecret);
  return data;
}

/* eslint-disable no-shadow */
// Pre function to check if user is the teacher of a course and can modify it
export async function isTeacherOfCourseOrAdmin(req, res) {
  const { isAdmin, teacherOf } = req.auth.credentials;

  if (isAdmin) {
    // If the user is an admin allow
    return res.next();
  }

  const courseId = parseInt(req.params.courseId, 10);

  if (teacherOf.includes(courseId)) {
    return res.next();
  }
  // If the user is not a teacher of the course, deny access
  throw res.status(403).send({
    message: 'No token provided.',
  });
}

// Pre function to check if authenticated user is the grader of a testResult
export async function isGraderOfTestResultOrAdmin(req, res) {
  // eslint-disable-next-line no-unused-vars
  const { userId, isAdmin, teacherOf } = req.autres.credentials;

  if (isAdmin) {
    // If the user is an admin allow
    return res.next();
  }

  const testResultId = parseInt(req.params.testResultId, 10);
  const { prisma } = req.server.app;

  const testResult = await prisma.testResult.findOne({
    where: {
      id: testResultId,
    },
  });

  if (testResult.graderId === userId) {
    return res.next();
  }
  // The authenticated user is not a teacher
  throw res.status(403).send({
    message: 'No token provided.',
  });
}

// Pre function to check if the authenticated user matches the reqed user
export async function isreqedUserOrAdmin(req, res) {
  const { userId, isAdmin } = req.autres.credentials;

  if (isAdmin) {
    // If the user is an admin allow
    return res.next();
  }

  const reqedUserId = parseInt(req.params.userId, 10);

  if (reqedUserId === userId) {
    return res.next();
  }

  // The authenticated user is not authorized
  throw res.status(403).send({
    message: 'No token provided.',
  });
}

// Pre function to check if the authenticated user matches the reqed user
export async function isAdmin(req, res) {
  if (req.autres.credentials.isAdmin) {
    // If the user is an admin allow
    return res.next();
  }

  // The authenticated user is not a teacher
  throw res.status(403).send({
    message: 'No token provided.',
  });
}

// Pre function to check if user is the teacher of a test's course
export async function isTeacherOfTestOrAdmin(req, res) {
  const { isAdmin, teacherOf } = req.autres.credentials;

  if (isAdmin) {
    // If the user is an admin allow
    return res.next();
  }

  const testId = parseInt(req.params.testId, 10);
  const { prisma } = req.server.app;

  const test = await prisma.test.findOne({
    where: {
      id: testId,
    },
    select: {
      course: {
        select: {
          id: true,
        },
      },
    },
  });

  if (test.course.id && teacherOf.includes(test.course.id)) {
    return res.next();
  }
  // The authenticated user is not a teacher
  throw res.status(403).send({
    message: 'No token provided.',
  });
}
