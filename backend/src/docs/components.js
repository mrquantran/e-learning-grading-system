const components = {
  components: {
    schemas: {
      id: {
        type: 'string',
        description: 'An id of a todo',
        example: 'tyVgf',
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
          coursesDetail: {
            type: 'string',
            description: 'The status of the todo',
            example: false,
          },
        },
      },
      CoursesInput: {
        type: 'object',
        properties: {
          title: {
            type: 'string',
            description: "Todo's title",
            example: 'Coding in JavaScript',
          },
          completed: {
            type: 'boolean',
            description: 'The status of the todo',
            example: false,
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
