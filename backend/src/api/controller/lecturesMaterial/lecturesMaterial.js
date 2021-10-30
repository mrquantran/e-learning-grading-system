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

export const lecturesMaterial = {
  createLecture,
};
