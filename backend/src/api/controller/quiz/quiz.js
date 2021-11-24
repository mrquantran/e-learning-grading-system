/* eslint-disable import/extensions */
/* eslint-disable no-restricted-syntax */
/* eslint-disable max-len */
/* eslint-disable import/prefer-default-export */
import pkg from '@prisma/client';
import { getDecodedToken } from '../../helpers/auth.helper.js';
import { isTeacherEnrollWithLectureId } from '../../helpers/course/isStudentEnroll.js';

const { PrismaClient } = pkg;
const prisma = new PrismaClient();

const createQuiz = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description } = req.body;

    const token = await getDecodedToken(req);

    if (!await isTeacherEnrollWithLectureId(req, res)) {
      return res.status(403).json({ message: 'you dont have permission to perform this action' });
    }

    const dataLecture = {
      title,
      description,
      lectureId: Number(id),
    };

    // eslint-disable-next-line no-unused-vars
    const quiz = await prisma.quiz.create({
      data: {
        title: dataLecture.title,
        description: dataLecture.description,
        isPublic: true,
        lectures: {
          connect: {
            id: dataLecture.lectureId,
          },
        },
        user: {
          connect: {
            id: Number(token.id),
          },
        },
      },
    });

    return res.status(200).json(quiz);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
    return res.status(500).json({ message: error });
  }
};

export const quiz = {
  createQuiz,
};
