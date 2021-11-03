const enrollCourse = {
  get: {
    tags: ['Courses'],
    description: 'Enroll courses',
    operationId: 'userenrollCourse',
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
      {
        name: 'type', // name of the param
        allowReserved: true,
        in: 'query', // location of the param
        schema: {
          type: 'string',
          properties: {
            type: {
              type: 'string',
              description: 'Title of user',
              example: 'STUDENT',
            },
          },
        },
        required: false, // Mandatory param
        description: 'A single course id', // param desc.
      },
    ],
    responses: {
      200: {
        description: 'User were obtained',
        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/Users',
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
        description: 'User was enrolled',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                message: {
                  type: 'string',
                  description: 'message',
                  example: 'User was enrolled',
                },
              },
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
