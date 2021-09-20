/* eslint-disable import/prefer-default-export */
import { add } from 'date-fns';

const weekFromNow = add(new Date(), { days: 7 });
const twoWeekFromNow = add(new Date(), { days: 14 });
const monthFromNow = add(new Date(), { days: 28 });

// user
const users = [
  {
    email: 'grace@hey.com',
    firstName: 'Grace',
    lastName: 'Bell',

  },

  {
    email: 'bill@hey.com',
    firstName: 'Bill',
    lastName: 'Tinder',
  },

  {
    email: 'tim@hey.com',
    firstName: 'Tim',
    lastName: 'Jack',
  },
  {
    email: 'tommy@hey.com',
    firstName: 'Tommy',
    lastName: 'Jackson',
  },
  {
    email: 'alex@hey.com',
    firstName: 'Alex',
    lastName: 'Grace',
  },
  {
    email: 'jessica@hey.com',
    firstName: 'Jessica',
    lastName: 'Jonhson',
  },
  {
    email: 'jackson@hey.com',
    firstName: 'Jackson',
    lastName: 'Michael',
  },
  {
    email: 'eilissh@hey.com',
    firstName: 'Eilish',
    lastName: 'Billie',
  },
  {
    email: 'gate@hey.com',
    firstName: 'Gate',
    lastName: 'Bill',
  },
  {
    email: 'chan@hey.com',
    firstName: 'Chan',
    lastName: 'Jackie',
  },
  {
    email: 'waston@hey.com',
    firstName: 'Waston',
    lastName: 'Tommy',
  },
];

const testResults = [
  {
    testId: 'Test1',
    result: [
      {
        createdAt: new Date(),
        result: 100,
        gradedBy: 'waston@hey.com',
        student: 'jessica@hey.com',
      },
      {
        createdAt: new Date(),
        result: 100,
        gradedBy: 'waston@hey.com',
        student: 'alex@hey.com',
      },
      {
        createdAt: new Date(),
        result: 100,
        gradedBy: 'waston@hey.com',
        student: 'tim@hey.com',
      },
    ],
  },
  {
    testId: 'Test2',
    result: [
      {
        createdAt: new Date(),
        result: 100,
        gradedBy: 'waston@hey.com',
        student: 'jessica@hey.com',
      },
      {
        createdAt: new Date(),
        result: 100,
        gradedBy: 'waston@hey.com',
        student: 'alex@hey.com',
      },
    ],
  },
  {
    testId: 'Test3',
    result: [
      {
        createdAt: new Date(),
        result: 100,
        gradedBy: 'waston@hey.com',
        student: 'jessica@hey.com',
      },
      {
        createdAt: new Date(),
        result: 100,
        gradedBy: 'waston@hey.com',
        student: 'alex@hey.com',
      },
      {
        createdAt: new Date(),
        result: 100,
        gradedBy: 'waston@hey.com',
        student: 'tim@hey.com',
      },
    ],
  },
  {
    testId: 'Test4',
    result: [
      {
        createdAt: new Date(),
        result: 100,
        gradedBy: 'tim@hey.com',
        student: 'gate@hey.com',
      },
    ],
  },
  {
    testId: 'Test6',
    result: [
      {
        createdAt: new Date(),
        result: 100,
        gradedBy: 'gate@hey.com',
        student: 'alex@hey.com',
      },
    ],
  },
  {
    testId: 'Test7',
    result: [
      {
        createdAt: new Date(),
        result: 100,
        gradedBy: 'alex@hey.com',
        student: 'jessica@hey.com',
      },
      {
        createdAt: new Date(),
        result: 100,
        gradedBy: 'alex@hey.com',
        student: 'tim@hey.com',
      },
    ],
  },
  {
    testId: 'Test8',
    result: [
      {
        createdAt: new Date(),
        result: 100,
        gradedBy: 'tim@hey.com',
        student: 'gate@hey.com',
      },
    ],
  },
  {
    testId: 'Test9',
    result: [
      {
        createdAt: new Date(),
        result: 100,
        gradedBy: 'jessica@hey.com',
        student: 'jackson@hey.com',
      },
      {
        createdAt: new Date(),
        result: 50,
        gradedBy: 'jessica@hey.com',
        student: 'gate@hey.com',
      },
    ],
  },
  {
    testId: 'Test12',
    result: [
      {
        createdAt: new Date(),
        result: 100,
        gradedBy: 'alex@hey.com',
        student: 'jessica@hey.com',
      },
      {
        createdAt: new Date(),
        result: 100,
        gradedBy: 'alex@hey.com',
        student: 'tim@hey.com',
      },
      {
        createdAt: new Date(),
        result: 100,
        gradedBy: 'alex@hey.com',
        student: 'gate@hey.com',
      },
    ],
  },
];

const courses = [
  {
    name: 'Typescript course',
    courseDetails: '1232456',
    testing: [
      {
        name: 'Test1',
        updatedAt: new Date(),
        date: monthFromNow,
      },
      {
        name: 'Test2',
        updatedAt: new Date(),
        date: twoWeekFromNow,
      },
      {
        name: 'Test3',
        updatedAt: new Date(),
        date: weekFromNow,
      },
    ],
    member: [
      { role: 'TEACHER', email: 'waston@hey.com' },
      { role: 'STUDENT', email: 'jessica@hey.com' },
      { role: 'STUDENT', email: 'alex@hey.com' },
      { role: 'STUDENT', email: 'tim@hey.com' },
    ],
  },
  {
    name: 'Javascript Basic 6',
    courseDetails: 'c43214',
    testing: [
      {
        name: 'Test4',
        updatedAt: new Date(),
        date: monthFromNow,
      },
      {
        name: 'Test8',
        updatedAt: new Date(),
        date: twoWeekFromNow,
      },
    ],
    member: [
      { role: 'TEACHER', email: 'tim@hey.com' },
      { role: 'STUDENT', email: 'gate@hey.com' },

    ],
  },
  {
    name: 'Javascript Basic 7',
    courseDetails: 'c43214',
    testing: [
      {
        name: 'Test12',
        updatedAt: new Date(),
        date: weekFromNow,
      },
      {
        name: 'Test7',
        updatedAt: new Date(),
        date: twoWeekFromNow,
      },
    ],
    member: [
      { role: 'TEACHER', email: 'alex@hey.com' },
      { role: 'STUDENT', email: 'jessica@hey.com' },
      { role: 'STUDENT', email: 'tim@hey.com' },
      { role: 'STUDENT', email: 'gate@hey.com' },

    ],
  },
  {
    name: 'Javascript Basic 8',
    courseDetails: 'c43214',
    testing: [
      {
        name: 'Test6',
        updatedAt: new Date(),
        date: monthFromNow,
      },
    ],
    member: [
      { role: 'TEACHER', email: 'gate@hey.com' },
      { role: 'STUDENT', email: 'alex@hey.com' },

    ],
  },
  {
    name: 'Javascript Basic ',
    courseDetails: 'c43214',
    testing: [
      {
        name: 'Test9',
        updatedAt: new Date(),
        date: monthFromNow,
      },
    ],
    member: [
      { role: 'TEACHER', email: 'jessica@hey.com' },
      { role: 'STUDENT', email: 'jackson@hey.com' },
      { role: 'STUDENT', email: 'gate@hey.com' },
    ],
  },
];

export const data = {
  users,
  courses,
  testResults,
};
