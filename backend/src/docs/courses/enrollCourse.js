const enrollCourse = {
  post: {
    tags: ['Courses'],
    description: 'Enroll courses',
    operationId: 'enrollCourse',
    security: [
      { bearerAuth: [] },
    ],
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
    requestBody: {
      // expected request body
      content: {
        // content-type
        'application/json': {
          schema: {
            type: 'object',
            properties: {

              role: {
                type: 'string',
                description: 'Type of user',
                example: 'STUDENT',
              },
            },
          },
        },
      },
    },
    responses: {
      200: {
        description: 'Courses were updated',
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

export default enrollCourse;
