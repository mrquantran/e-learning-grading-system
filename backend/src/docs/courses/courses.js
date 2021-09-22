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
    description: 'Create courses',
    operationId: 'createCourse',
    parameters: [],
    requestBody: {
      // expected request body
      content: {
        // content-type
        'application/json': {
          schema: {
            $ref: '#/components/schemas/CoursesInput', // course input data model
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
