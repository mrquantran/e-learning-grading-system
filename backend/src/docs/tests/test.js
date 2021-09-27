const tests = {
  get: {
    tags: ['Tests'],
    description: 'Get tests Id',
    operationId: 'getTestById',
    parameters: [
      // expected params.
      {
        name: 'testId', // name of the param
        in: 'path', // location of the param
        schema: {
          $ref: '#/components/schemas/id', // data model of the param
        },
        required: true, // Mandatory param
        description: 'A single course id', // param desc.
      },
    ],
    // expected responses
    responses: {
      200: {
        description: 'Tests were obtained',
        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/Testss',
            },
          },
        },
      },
      404: {
        description: 'Tests is not found',
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
  put: {
    tags: ['Tests'],
    description: 'Update Test',
    operationId: 'updateTest',
    parameters: [
      // expected params.
      {
        name: 'testId', // name of the param
        in: 'path', // location of the param
        schema: {
          $ref: '#/components/schemas/id', // data model of the param
        },
        required: true, // Mandatory param
        description: 'A single test result id', // param desc.
      },
    ],
    requestBody: {
      // expected request body
      content: {
        // content-type
        'application/json': {
          schema: {
            $ref: '#/components/schemas/TestInput',
          },
        },
      },
    },
    responses: {
      200: {
        description: 'Test result were updated',
        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/TestInput',
            },
          },
        },
      },
      404: {
        description: 'Test result is not found',
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
  delete: {
    tags: ['Tests'],
    description: 'Delete tests',
    operationId: 'deleteTests',
    parameters: [
      // expected params.
      {
        name: 'testId', // name of the param
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
        description: 'Tests were deleted',
        content: {
          'application/json': {
            messages: 'deleted successfully',
          },
        },
      },
      404: {
        description: 'Tests is not found',
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

export default tests;
