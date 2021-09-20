/* eslint-disable no-await-in-loop */
/* eslint-disable no-restricted-syntax */
/* eslint-disable import/extensions */
import pkg from '@prisma/client';
// import { add } from 'date-fns';
import { data } from './data.js';

const { PrismaClient } = pkg;
const prisma = new PrismaClient();

// A `main` function so that we can use async/await
async function main() {
  // const weekFromNow = add(new Date(), { days: 7 });
  // const twoWeekFromNow = add(new Date(), { days: 14 });
  // const monthFromNow = add(new Date(), { days: 28 });

  // xóa hết dữ liệu
  await prisma.testResult.deleteMany({});
  await prisma.courseEnrollment.deleteMany({});
  await prisma.test.deleteMany({});
  await prisma.user.deleteMany({});
  await prisma.course.deleteMany({});

  // users
  for (const user of data.users) {
    await prisma.user.create({
      data: {
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        // courses: {
        //   create: {
        //     role: user.ROLE,
        //     course: {
        //       connect: user.courses.map((item) => ({
        //         id: item,
        //       })),
        //     },
        //   },
        // },
      },
    });
  }

  for (const course of data.courses) {
    await prisma.course.create({
      data: {
        name: course.name,
        members: {
          create:
            course.member.map((item) => ({
              role: item.role,
              user: {
                connect: {
                  email: item.email,
                },
              },
            })),
        },
        tests: {
          create: course.testing.map((test) => ({
            name: test.name,
            date: test.date,
            updatedAt: test.updatedAt,
          })),
        },
      },
    });
  }

  for (const test of data.testResults) {
    const { result } = test;

    for (const testResult of result) {
      await prisma.testResult.create({
        data: {
          gradedBy: {
            connect: {
              email: testResult.gradedBy,
            },
          },
          student: {
            connect: {
              email: testResult.student,
            },
          },
          test: {
            connect: {
              name: test.testId,
            },
          },
          result: testResult.result,
        },
      });
    }
  }

  // eslint-disable-next-line no-console
  console.log(data);
}

// eslint-disable-next-line promise/catch-or-return
main()
  .catch((e) => {
    // eslint-disable-next-line no-console
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // Disconnect Prisma Client
    await prisma.$disconnect();
  });
