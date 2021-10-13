const delenrollment = {
  delete: {
    tags: ['Enrollment'],
    description: 'Delete enrollment',
    operationId: 'deleteenrollment',
    parameters: [
      // expected params.
      {
        name: 'enrollmentId', // name of the param
        in: 'path', // location of the param
        schema: {
          $ref: '#/components/schemas/id', // data model of the param
        },
        required: true, // Mandatory param
        description: 'A single test result id', // param desc.
      },
    ],
    responses: {
      200: {
        description: 'Enrollment were deleted',
        content: {
          'application/json': {
            messages: 'deleted successfully',
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
};

export default delenrollment;
