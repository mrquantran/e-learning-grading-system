/* eslint-disable import/extensions */
/* eslint-disable no-restricted-syntax */
/* eslint-disable max-len */
/* eslint-disable import/prefer-default-export */
import pkg from '@prisma/client';
import { isTeacherEnroll, isTeacherEnrollWithLectureId } from '../../helpers/course/isStudentEnroll.js';

const { PrismaClient } = pkg;
const prisma = new PrismaClient();

const getLectureOfCourse = async (req, res) => {
  try {
    const { id } = req.params;

    if (!await isTeacherEnroll(req, res)) {
      return res.status(403).json({ message: 'you dont have permission to perform this action' });
    }
    const lectures = await prisma.course.findUnique({
      where: {
        id: Number(id),
      },
      select: {
        lectures: {
          select: {
            id: true,
            title: true,
            createdAt: true,
            lecturesMaterial: {
              select: {
                id: true,
                title: true,
                createdAt: true,
              },
            },
          },
        },
      },
    });

    const data = [];

    // eslint-disable-next-line array-callback-return
    lectures.lectures.map(({ lecturesMaterial, ...rest }, index) => {
      data.push({ ...rest, objectIndex: index + 1, _class: 'chapter' });
      for (const section of lecturesMaterial) {
        data.push({ ...section, _class: 'section', objectIndex: index + 1 });
      }
    });

    const lengthData = data.length;
    const mappingData = data.map((item, index) => ({ ...item, sortOrder: lengthData - index }));

    return res.status(200).json(mappingData);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
    return res.status(500).json({ message: error });
  }
};

const createSection = async (req, res) => {
  try {
    const { id } = req.params;
    const { title } = req.body;

    if (!await isTeacherEnroll(req, res)) {
      return res.status(403).json({ message: 'you dont have permission to perform this action' });
    }

    const dataLecture = {
      title,
      courseId: Number(id),
    };

    // eslint-disable-next-line no-unused-vars
    const lectures = await prisma.lectures.create({
      data: {
        title: dataLecture.title,
        course: {
          connect: {
            id: Number(id),
          },
        },
      },
    });

    return res.status(200).json(lectures);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
    return res.status(500).json({ message: error });
  }
};

const deleteSection = async (req, res) => {
  try {
    const { id } = req.params;

    if (!await isTeacherEnrollWithLectureId(req, res)) {
      return res.status(403).json({ message: 'you dont have permission to perform this action' });
    }

    const getLecture = await prisma.lectures.findUnique({
      where: {
        id: Number(id),
      },
    });

    if (!getLecture) {
      const message = 'Your curriculum item does not exist';
      return res.status(200).json({ message });
    }

    const deleteLectureMaterials = prisma.lecturesMaterial.deleteMany({
      where: {
        lectureId: Number(id),
      },
    });

    const deleteUser = prisma.lectures.delete({
      where: {
        id: Number(id),
      },
    });

    // eslint-disable-next-line no-unused-vars
    const transaction = await prisma.$transaction([deleteLectureMaterials, deleteUser]);

    const message = 'Your curriculum item has been deleted';

    return res.status(200).json({ message });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
    return res.status(500).json({ message: error });
  }
};

const updateSection = async (req, res) => {
  try {
    const { id } = req.params;
    const { item } = req.body;

    if (!await isTeacherEnrollWithLectureId(req, res)) {
      return res.status(403).json({ message: 'you dont have permission to perform this action' });
    }

    // eslint-disable-next-line no-shadow
    item.forEach(async (lecture, index) => {
      await prisma.lectures.upsert({
        where: {
          courseId: Number(id),
        },
        data: {
          title: lecture.title,
        },
        create: {
          sort: index,
        },
      });
    });

    const message = 'Your curriculum item has been updated';
    return res.status(200).json({ message });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
    return res.status(500).json({ message: error });
  }
};

export const lectures = {
  getLectureOfCourse, createSection, updateSection, deleteSection,
};
