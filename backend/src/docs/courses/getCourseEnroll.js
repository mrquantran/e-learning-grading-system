const getEnrollCourse = {
  get: {
    tags: ['Courses'],
    description: 'Enroll courses',
    operationId: 'getEnrollCourse',
    security: [
      { bearerAuth: [] },
    ],
    parameters: [],
    requestBody: {},
    responses: {
      200: {
        description: '',
        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/Courses',
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

export default getEnrollCourse;
