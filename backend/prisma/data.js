/* eslint-disable import/prefer-default-export */

import { add } from 'date-fns';

const weekFromNow = add(new Date(), { days: 7 });
const twoWeekFromNow = add(new Date(), { days: 14 });
const monthFromNow = add(new Date(), { days: 28 });

const data = {
  courses: [
    {
      name: 'CRUD with Prisma',
      //   tests: {
      create: [
        {
          date: weekFromNow,
          name: 'First test',
        },
        {
          date: twoWeekFromNow,
          name: 'Second test',
        },
        {
          date: monthFromNow,
          name: 'Final exam',
        },
      ],
    },
  ],
  users: [
    // grace
    {
      email: 'grace@hey.com',
      firstName: 'Grace',
      lastName: 'Bell',
      social: {
        facebook: 'gracebell',
        twitter: 'therealgracebell',
      },
      // 1,2,3
      courses: [1, 2, 3],
      ROLE: 'STUDENT',
    },
    {
      email: 'grace@hey.com',
      firstName: 'Grace',
      lastName: 'Bell',
      courses: [2, 3],
      social: {
        facebook: 'gracebell',
        twitter: 'therealgracebell',
      },
    },
    {
      email: 'grace@hey.com',
      firstName: 'Grace',
      lastName: 'Bell',
      social: {
        facebook: 'gracebell',
        twitter: 'therealgracebell',
      },
    },
  ],

};

export default data;
