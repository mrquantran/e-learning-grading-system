const getTests = {
  get: {
    tags: ['Test'],
    description: 'Get Tests',
    operationId: 'getTests',
    parameters: [],
    responses: {
      200: {
        description: 'Courses were obtained',
        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/Tests',
            },
          },
        },
      },
    },
  },
};

export default getTests;
