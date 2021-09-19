const getTestResultById = {
  get: {
    tags: ['TestResult'],
    description: 'Get courses Id',
    operationId: 'getCoursesById',
    parameters: [
      // expected params.
      {
        name: 'id', // name of the param
        in: 'path', // location of the param
        schema: {
          $ref: '#/components/schemas/id', // data model of the param
        },
        required: true, // Mandatory param
        description: 'A single course id', // param desc.
      },
    ],
    // expected responses
    responses: {
      200: {
        description: 'Courses were obtained',
        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/TestResults',
            },
          },
        },
      },
      404: {
        description: 'Courses is not found',
        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/Error',
            },
          },
        },
      },
    },
  },
};

export default getTestResultById;
