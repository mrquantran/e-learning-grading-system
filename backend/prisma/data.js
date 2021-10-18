/* eslint-disable import/prefer-default-export */
import { add } from 'date-fns';

const weekFromNow = add(new Date(), { days: 7 });
const twoWeekFromNow = add(new Date(), { days: 14 });
const monthFromNow = add(new Date(), { days: 28 });

// user
const users = [
  {
    email: 'quantran2381@gmail.com',
    firstName: 'Quan',
    lastName: 'Tran',
    password: 'Quantran@238200',
  },
  {
    email: 'grace@hey.com',
    firstName: 'Grace',
    lastName: 'Bell',
    password: '123456',
  },

  {
    email: 'bill@hey.com',
    firstName: 'Bill',
    lastName: 'Tinder',
    password: '123456',
  },

  {
    email: 'tim@hey.com',
    firstName: 'Tim',
    lastName: 'Jack',
    password: '123456',
  },
  {
    email: 'tommy@hey.com',
    firstName: 'Tommy',
    lastName: 'Jackson',
    password: '123456',
  },
  {
    email: 'alex@hey.com',
    firstName: 'Alex',
    lastName: 'Grace',
    password: '123456',
  },
  {
    email: 'jessica@hey.com',
    firstName: 'Jessica',
    lastName: 'Jonhson',
    password: '123456',
  },
  {
    email: 'jackson@hey.com',
    firstName: 'Jackson',
    lastName: 'Michael',
    password: '123456',
  },
  {
    email: 'eilissh@hey.com',
    firstName: 'Eilish',
    lastName: 'Billie',
    password: '123456',
  },
  {
    email: 'gate@hey.com',
    firstName: 'Gate',
    lastName: 'Bill',
    password: '123456',
  },
  {
    email: 'chan@hey.com',
    firstName: 'Chan',
    lastName: 'Jackie',
    password: '123456',
  },
  {
    email: 'waston@hey.com',
    firstName: 'Waston',
    lastName: 'Tommy',
    password: '123456',
  },
];

const courses = [
  {
    name: 'Typescript course',
    courseDetails: '1232456',
    favoriteCourse: ['waston@hey.com', 'quantran2381@gmail.com', 'alex@hey.com'],
    lectures: [
      {
        title: 'Introduction',
        class: 'CHAPTER',
      },
      {
        title: 'What is TypeScript?',
        class: 'LECTURE',
      },
      {
        title: 'Typescript Basic',
        class: 'LECTURE',
      },
    ],
    testing: [
      {
        name: 'Test1',
        updatedAt: new Date(),
        date: monthFromNow,
        results: [
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
        name: 'Test2',
        updatedAt: new Date(),
        date: twoWeekFromNow,
        results: [
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
        name: 'Test3',
        updatedAt: new Date(),
        date: weekFromNow,
        results: [
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
    ],
    member: [
      { role: 'TEACHER', email: 'waston@hey.com' },
      { role: 'STUDENT', email: 'jessica@hey.com' },
      { role: 'STUDENT', email: 'alex@hey.com' },
      { role: 'STUDENT', email: 'tim@hey.com' },
      { role: 'STUDENT', email: 'quantran2381@gmail.com' },
    ],
  },
  {
    name: 'Javascript Basic 6',
    favoriteCourse: ['tim@hey.com', 'quantran2381@gmail.com', 'gate@hey.com'],
    courseDetails: 'c43214',
    lectures: [
      {
        title: 'Introduction',
        class: 'CHAPTER',
      },
      {
        title: 'What is Javascript?',
        class: 'LECTURE',
      },
      {
        title: 'Javascript Basic',
        class: 'LECTURE',
      },
    ],
    testing: [
      {
        name: 'Test4',
        updatedAt: new Date(),
        date: monthFromNow,
        results: [
          {
            createdAt: new Date(),
            result: 4,
            gradedBy: 'tim@hey.com',
            student: 'gate@hey.com',
          },
        ],
      },
      {
        name: 'Test8',
        updatedAt: new Date(),
        date: twoWeekFromNow,
        results: [],
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
    favoriteCourse: [],
    lectures: [],
    testing: [
      {
        name: 'Test12',
        updatedAt: new Date(),
        date: weekFromNow,
        results: [
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
      {
        name: 'Test7',
        updatedAt: new Date(),
        date: twoWeekFromNow,
        results: [
          {
            createdAt: new Date(),
            result: 100,
            gradedBy: 'alex@hey.com',
            student: 'tim@hey.com',
          },
        ],
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
    favoriteCourse: [],
    lectures: [],
    testing: [
      {
        name: 'Test6',
        updatedAt: new Date(),
        date: monthFromNow,
        results: [
          {
            createdAt: new Date(),
            result: 100,
            gradedBy: 'gate@hey.com',
            student: 'alex@hey.com',
          },
        ],
      },
    ],
    member: [
      { role: 'TEACHER', email: 'gate@hey.com' },
      { role: 'STUDENT', email: 'alex@hey.com' },
      { role: 'STUDENT', email: 'quantran2381@gmail.com' },
    ],
  },
  {
    name: 'Javascript Basic ',
    favoriteCourse: ['gate@hey.com', 'quantran2381@gmail.com'],
    courseDetails: 'c43214',
    lectures: [],
    testing: [
      {
        name: 'Test9',
        updatedAt: new Date(),
        date: monthFromNow,
        results: [
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
    ],
    member: [
      { role: 'TEACHER', email: 'jessica@hey.com' },
      { role: 'STUDENT', email: 'jackson@hey.com' },
      { role: 'STUDENT', email: 'gate@hey.com' },
      { role: 'STUDENT', email: 'quantran2381@gmail.com' },
    ],
  },
];

export const data = {
  users,
  courses,
  // testresultss,
};
