const getCourses = {
  get: {
    tags: ['Courses CRUD operations'],
    description: 'Get courses',
    operationId: 'getCourses',
    parameters: [],
    responses: {
      200: {
        description: 'Courses were obtained',
        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/Courses',
            },
          },
        },
      },
    },
  },
};

export default getCourses;
