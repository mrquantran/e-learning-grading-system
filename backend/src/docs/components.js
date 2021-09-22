const components = {
  components: {
    schemas: {
      id: {
        type: 'number',
        description: 'Pass an id',
        example: '1',
      },
      Tests: {
        type: 'object',
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
       TestResults: {
        type: 'object',
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
