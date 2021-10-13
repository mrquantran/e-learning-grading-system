const enrollment = {
  get: {
    tags: ['Enrollment'],
    description: 'Get enrollment Id',
    operationId: 'getEnrollmentId',
    parameters: [
      {
        name: 'enrollmentId',
        in: 'path',
        schemas: {
          $ref: '#/components/schemas/id',
        },
        required: true, // Mandatory param
        description: 'A single course id', // param desc.
      },
    ],
    // expected responses
    responses: {
      200: {
        description: 'Enrollments were obtained',
        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/Testss',
            },
          },
        },
      },
      404: {
        description: 'Enrollment is not found',
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

  // post: {
  //   tags: ['Enrollment'],
  //   description: 'Post enrollment Id',
  //   operationId: 'postEnrollmentId',
  //   parameters: [
  //     // expected params.
  //     {
  //       name: 'enrollmentId',
  //       in: 'path', // location of the param
  //       schema: {
  //         $ref: '#/components/schemas/id', // data model of the param
  //       },
  //       required: true, // Mandatory param
  //       description: 'A single test result id', // param desc.
  //     },
  //   ],
  //   requestBody: {
  //     // expected request body
  //     content: {
  //       // content-type
  //       'application/json': {
  //         schema: {
  //           $ref: '#/components/schemas/TestInput',
  //         },
  //       },
  //     },
  //   },
  //   responses: {
  //     200: {
  //       description: 'Enrollment were posted',
  //       content: {
  //         'application/json': {
  //           schema: {
  //             $ref: '#/components/schemas/TestInput',
  //           },
  //         },
  //       },
  //     },
  //     404: {
  //       description: 'Enrollment is not found',
  //       content: {
  //         'application/json': {
  //           schema: {
  //             $ref: '#/components/schemas/Error',
  //           },
  //         },
  //       },
  //     },
  //   },
  // },
};

export default enrollment;
