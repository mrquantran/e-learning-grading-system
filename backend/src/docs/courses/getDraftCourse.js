const getDraftCourse = {
  get: {
    tags: ['Courses'],
    description: 'Draft courses',
    operationId: 'getDraftCourse',
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

export default getDraftCourse;
