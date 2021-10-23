const courses = {
  get: {
    tags: ['Courses'],
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
  post: {
    tags: ['Courses'],
    description: 'Create draft courses',
    operationId: 'createDraftCourse',
    parameters: [],
    security: [
      { bearerAuth: [] },
    ],
    requestBody: {
      // expected request body
      content: {
        // content-type
        'application/json': {
          schema: {
            type: 'object',
            properties: {
              name: {
                type: 'string',
                description: 'title of course',
                example: 'javascript',
              },
            },
          },
        },
      },
    },
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

export default courses;
