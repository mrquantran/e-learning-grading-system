/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
/* eslint-disable no-console */
/* eslint-disable import/extensions */
/* eslint-disable import/prefer-default-export */
import pkg from '@prisma/client';
import createHttpError from 'http-errors';
import { getDecodedToken } from '../../helpers/auth.helper.js';
import { isTeacherEnroll } from '../../helpers/course/isStudentEnroll.js';

const { PrismaClient } = pkg;
const prisma = new PrismaClient();

const getEnrollCourses = async (req, res) => {
  try {
    const token = await getDecodedToken(req);

    //   console.log(token);

    const courseEnroll = await prisma.user.findUnique({
      where: {
        id: Number(token.id),
      },
      select: {
        courses: {
          select: {
            course: true,
          },
        },
      },
    });

    const data = courseEnroll.courses.map((item) => item.course);

    return res.status(200).json(data);
  } catch (error) {
  // 500 (Internal Server Error) - Something has gone wrong in your application.
    const httpError = createHttpError(500, error);
    return res.status(500).json({ message: httpError });
  }
};

async function getCoursePublic(req, res) {
  try {
    const courses = await prisma.course.findMany({
      where: {
        isPublic: true,
        isDraft: false,
      },
      select: {
        id: true,
        name: true,
        courseDetails: true,
        isPublic: true,
      },
    });
    return res.status(200).json(courses);
  } catch (error) {
  // 500 (Internal Server Error) - Something has gone wrong in your application.
    const httpError = createHttpError(500, error);
    return res.status(500).json({ message: httpError });
  }
}

async function createDraftCourse(req, res) {
  const { name } = req.body;

  const token = await getDecodedToken(req);

  const dataLecture = [
    {
      title: 'Introduction',
      lecturesMaterial: [
        {
          title: 'Introduction',
        },
      ],
    }];

  try {
    // when creating a course make the authenticated user a teacher of the course
    await prisma.course.create({
      data: {
        name,
        isPublic: false,
        isDraft: true,
        lectures: {
          create: dataLecture.map((item) => ({
            title: item.title,
            lecturesMaterial: {
              create: item.lecturesMaterial.map((lecture) => ({
                title: lecture.title,
              })),
            },
          })),
        },
        members: {
          create: {
            role: 'TEACHER',
            user: {
              connect: {
                id: Number(token.id),
              },
            },
          },
        },
      },
    });

    const message = 'Your draft course has been created successfully';
    return res.status(200).json({ message });
  } catch (error) {
    console.log(error);
    // 500 (Internal Server Error) - Something has gone wrong in your application.
    const httpError = createHttpError(500, error);
    return res.status(500).json({ message: httpError });
  }
}

async function getCourseById(req, res) {
  const { id } = req.params;

  try {
    const courseById = await prisma.course.findFirst({
      where: {
        id: Number(id),
      },
      include: {
        members: {
          select: {
            role: true,
            user: {
              select: {
                firstName: true,
                lastName: true,
                email: true,
                social: true,
              },
            },
          },
          // include: {
          //   // role: true,
          //   user: true,
          // },
          // where: {
          //   role: 'TEACHER',
          // },
        },
      },
    });

    const author = courseById.members.filter((item) => { if (item.role === 'TEACHER') return true; }).map((item) => ({ ...item.user }));
    const totalStudents = courseById.members.filter((item) => { if (item.role === 'STUDENT') return true; }).reduce((acc) => acc + 1, 0);

    const { members, isDraft, ...data } = courseById;

    if (isDraft) {
      const token = await getDecodedToken(req);
      if (!await isTeacherEnroll(req, res)) {
        return res.status(403).json({ message: 'you dont have permission to perform this action' });
      }
      const course = await prisma.courseEnrollment.findUnique({
        where: {
          userId_courseId: {
            courseId: Number(id),
            userId: Number(token.id),
          },
        },
        include: {
          course: true,
        },
      });

      const dataJson = course.course;

      if (!dataJson) {
        return res.status(401).json({ message: 'dont have data' });
      }

      return res.status(200).json(dataJson);
    }

    const dataJson = { ...data, author, totalStudents };

    if (!dataJson) {
      return res.status(401).json({ message: 'dont have data' });
    }

    return res.status(200).json(dataJson);
  } catch (error) {
    console.log(error);
    // 500 (Internal Server Error) - Something has gone wrong in your application.
    const httpError = createHttpError(500, error);
    return res.status(500).json({ message: httpError });
  }
}

async function getDraftCourse(req, res) {
  const token = await getDecodedToken(req);

  try {
    // when creating a course make the authenticated user a teacher of the course
    const courses = await prisma.courseEnrollment.findMany({
      where: {
        userId: Number(token.id),
      },
      include: {
        course: {
          select: {
            id: true,
            name: true,
            courseDetails: true,
            isDraft: true,
            isPublic: true,
          },
        },

      },
    });

    const data = courses.map((item) => item.course).sort((a, b) => b.id - a.id);

    return res.status(200).json(data);
  } catch (error) {
    console.log(error);
    // 500 (Internal Server Error) - Something has gone wrong in your application.
    const httpError = createHttpError(500, error);
    return res.status(500).json({ message: httpError });
  }
}

async function updateCourse(req, res) {
  const { id } = req.params;
  const { name, courseDetails } = req.body;
  try {
    if (!await isTeacherEnroll(req, res)) {
      return res.status(403).json({ message: 'you dont have permission to perform this action' });
    }

    // update course
    // eslint-disable-next-line no-unused-vars
    const updatedCourse = await prisma.course.update({
      where: { id: Number(id) },
      data: {
        name,
        courseDetails,
      },
    });

    return res.status(200).json({ message: 'Course updated successfully' });
  } catch (error) {
    console.log(error);
    // 500 (Internal Server Error) - Something has gone wrong in your application.
    const httpError = createHttpError(500, error);
    return res.status(500).json({ message: httpError });
  }
}

async function deleteCourse(req, res) {
  const { id } = req.params;
  try {
    if (!await isTeacherEnroll(req, res)) {
      return res.status(403).json({ message: 'you dont have permission to perform this action' });
    }

    // update course
    // eslint-disable-next-line no-unused-vars

    const lectureInCourse = await prisma.lectures.findMany({
      where: {
        courseId: Number(id),
      },
    });

    lectureInCourse.forEach(async (item) => {
      await prisma.lectures.update({
        where: {
          id: Number(item.id),
        },
        data: {
          lecturesMaterial: {
            deleteMany: {},
          },
        },
      });
    });

    await prisma.course.update({
      where: { id: Number(id) },
      data: {
        lectures: {
          deleteMany: {},
        },
        favoriteCourse: {
          deleteMany: {},
        },
        members: {
          deleteMany: {},
        },
        tests: {
          deleteMany: {},
        },
      },
    });

    // eslint-disable-next-line no-shadow
    await prisma.course.delete({
      where: {
        id: Number(id),
      },
    });

    return res.status(200).json({ message: 'Your course has been deleted' });
  } catch (error) {
    console.log(error);
    // 500 (Internal Server Error) - Something has gone wrong in your application.
    const httpError = createHttpError(500, error);
    return res.status(500).json({ message: httpError });
  }
}

async function publishCourse(req, res) {
  const { id } = req.params;
  try {
    if (!await isTeacherEnroll(req, res)) {
      return res.status(403).json({ message: 'you dont have permission to perform this action' });
    }

    const { isPublic, isDraft } = await prisma.course.findUnique({
      where: {
        id: Number(id),
      },
      select: {
        isPublic: true,
        isDraft: true,
      },
    });

    const text = !isPublic ? 'Publish' : 'Unpublish';

    const lecture = await prisma.lectures.findMany({
      where: {
        courseId: Number(id),
      },
      include: {
        lecturesMaterial: true,
      },
    });

    if (lecture.length === 0) {
      return res.status(401).json({ message: `You have to create lecture to ${text.toLowerCase()} your course` });
    }

    const lectureNoMaterial = lecture.filter((item) => item.lecturesMaterial.length === 0);

    if (lectureNoMaterial.length !== 0) {
      return res.status(401).json({ message: 'You have to have at least one lecture in section' });
    }

    // eslint-disable-next-line no-unused-vars
    const course = await prisma.course.update({
      where: {
        id: Number(id),
      },
      data: {
        isPublic: !isPublic,
        isDraft: !isDraft,
      },
    });

    // update course
    // eslint-disable-next-line no-unused-vars

    return res.status(200).json({ message: `${text} course successfully!!` });
  } catch (error) {
    console.log(error);
    // 500 (Internal Server Error) - Something has gone wrong in your application.
    const httpError = createHttpError(500, error);
    return res.status(500).json({ message: httpError });
  }
}

export const coursesController = {
  getCoursePublic,
  getEnrollCourses,
  createDraftCourse,
  getDraftCourse,
  getCourseById,
  updateCourse,
  deleteCourse,
  publishCourse,
};
