/* eslint-disable import/extensions */
/* eslint-disable import/prefer-default-export */
import pkg from '@prisma/client';
import { isTeacherEnrollWithLectureId } from '../../helpers/course/isStudentEnroll.js';

const { PrismaClient } = pkg;
const prisma = new PrismaClient();

const createLecture = async (req, res) => {
  try {
    const { id: lectureId } = req.params;
    const { title } = req.body;

    if (!await isTeacherEnrollWithLectureId(req, res)) {
      return res.status(403).json({ message: 'you dont have permission to perform this action' });
    }

    const data = {
      title,
    };

    const lectureMaterial = await prisma.lecturesMaterial.create({
      data: {
        title: data.title,
        lecture: {
          connect: {
            id: Number(lectureId),
          },
        },
      },
    });

    return res.status(200).json(lectureMaterial);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
    return res.status(500).json({ message: error });
  }
};

const deleteLecture = async (req, res) => {
  try {
    const { id: lectureId } = req.params;

    // if (!await isTeacherEnrollWithLectureId(req, res)) {
    // eslint-disable-next-line max-len
    //   return res.status(403).json({ message: 'you dont have permission to perform this action' });
    // }

    const getLectureMaterial = await prisma.lecturesMaterial.findUnique({
      where: {
        id: Number(lectureId),
      },
    });

    if (!getLectureMaterial) {
      const message = 'Your curriculum item does not exist';
      return res.status(200).json({ message });
    }

    // eslint-disable-next-line no-unused-vars
    const lectureMaterial = await prisma.lecturesMaterial.delete({
      where: {
        id: Number(lectureId),
      },
    });

    const message = 'Your curriculum has been deleted';

    return res.status(200).json({ message });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
    return res.status(500).json({ message: error });
  }
};

const updateLecture = async (req, res) => {
  try {
    const { id: lectureId } = req.params;

    const { title } = req.body;

    // if (!await isTeacherEnrollWithLectureId(req, res)) {
    // eslint-disable-next-line max-len
    //   return res.status(403).json({ message: 'you dont have permission to perform this action' });
    // }

    const getLectureMaterial = await prisma.lecturesMaterial.findUnique({
      where: {
        id: Number(lectureId),
      },
    });

    if (!getLectureMaterial) {
      const message = 'Your curriculum item does not exist';
      return res.status(200).json({ message });
    }

    const dataUpdate = {
      title,
    };

    // eslint-disable-next-line no-unused-vars
    const lectureMaterial = await prisma.lecturesMaterial.update({
      where: {
        id: Number(lectureId),
      },
      data: {
        title: dataUpdate.title,
      },
    });

    // const message = 'Your curriculum has been updated';

    return res.status(200).json(lectureMaterial);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
    return res.status(500).json({ message: error });
  }
};

export const lecturesMaterial = {
  createLecture,
  deleteLecture,
  updateLecture,
};
