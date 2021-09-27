/* eslint-disable no-useless-escape */
const components = {
  components: {
    schemas: {
      id: {
        type: 'number',
        description: 'Pass an id',
        example: 1,
      },
      AuthAccount: {
        type: 'object',
        properties: {
          email: {
            type: 'string',
            description: 'email user',
            example: 'grace@hey.com',
          },
          emailToken: {
            type: 'number',
            description: 'email token user',
            example: 238200610,
          },
        },
      },
      Account: {
        type: 'object',
        properties: {
          email: {
            type: 'string',
            description: 'email user',
            example: 'grace@hey.com',
          },
          password: {
            type: 'string',
            description: 'password user',
            example: '123456',
          },
        },
      },
      SignupAccount: {
        type: 'object',
        properties: {
          email: {
            type: 'string',
            description: 'email user',
            example: 'grace@hey.com',
          },
          password: {
            type: 'string',
            description: 'password user',
            example: '123456',
          },
          firstName: {
            type: 'string',
            description: 'first name user',
            example: 'grace',
          },
          lastName: {
            type: 'string',
            description: 'last name user',
            example: 'bruce',
          },
        },
      },
      Tests: {
        type: 'object',
        properties: {
          id: {
            type: 'number',
            description: 'Todo identification number',
            example: '1',
          },
          name: {
            type: 'string',
            description: "Todo's title",
            example: 'Coding in JavaScript',
          },
          date: {
            type: 'string',
            description: 'The status of the todo',
            example: false,
          },
          updatedAt: {
            type: 'string',
            description: 'The status of the todo',
            example: false,
          },
        },
      },
      TestInput: {
        type: 'object',
        properties: {
          name: {
            type: 'string',
            description: 'Result of test result',
            example: 'Test',
          },
          date: {
            type: 'date',
            description: 'Date created',
            pattern: '^\d{4}[\-\/\s]?((((0[13578])|(1[02]))[\-\/\s]?(([0-2][0-9])|(3[01])))|(((0[469])|(11))[\-\/\s]?(([0-2][0-9])|(30)))|(02[\-\/\s]?[0-2][0-9]))',
            example: '2019/05/17',
          },

        },
      },
      TestResults: {
        type: 'object',
        properties: {
          id: {
            type: 'number',
            description: 'Test result id',
            example: 1,
          },
          createdAt: {
            type: 'date',
            description: 'Date created',
            pattern: /([0-9]{4})-(?:[0-9]{2})-([0-9]{2})/,
            example: '2019-05-17',
          },
          updatedAt: {
            type: 'date',
            description: 'Date updated',
            pattern: /([0-9]{4})-(?:[0-9]{2})-([0-9]{2})/,
            example: '2019-05-17',
          },
          result: {
            type: 'number',
            description: 'Result of test result',
            example: 100,
          },
        },
      },
      TestResultInput: {
        type: 'object',
        properties: {
          result: {
            type: 'number',
            description: 'Result of test result',
            example: 100,
          },
          createdAt: {
            type: 'date',
            description: 'Date created',
            pattern: /([0-9]{4})-(?:[0-9]{2})-([0-9]{2})/,
            example: '2019-05-17',
          },
          studentId: {
            type: 'number',
            description: 'Student number in courses',
            example: 1,
          },
          graderId: {
            type: 'number',
            description: 'Teacher number in courses',
            example: 3,
          },
        },
      },

      Courses: {
        type: 'object',
        properties: {
          id: {
            type: 'number',
            description: 'Todo identification number',
            example: '1',
          },
          name: {
            type: 'string',
            description: "Todo's title",
            example: 'Coding in JavaScript',
          },
          courseDetails: {
            type: 'string',
            description: 'The status of the todo',
            example: 'This is the description of courses to do identification number',
          },
        },
      },
      CoursesInput: {
        type: 'object',
        properties: {
          name: {
            type: 'string',
            description: "Todo's title",
            example: 'Coding in JavaScript',
          },
          courseDetails: {
            type: 'string',
            description: 'The status of the todo',
            example: 'This is the description of courses to do identification number',
          },
        },
      },
      Error: {
        type: 'object',
        properties: {
          message: {
            type: 'string',
          },
          internal_code: {
            type: 'string',
          },
        },
      },
    },
  },
};

export default components;
