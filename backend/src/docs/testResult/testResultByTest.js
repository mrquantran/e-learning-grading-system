const testResultsByTest = {
  get: {
    tags: ['Test Results'],
    description: 'Get Test result by TestId',
    operationId: 'getTestResultsByTestId',
    parameters: [
      // expected params.
      {
        name: 'testId', // name of the param
        in: 'path', // location of the param
        schema: {
          $ref: '#/components/schemas/id', // data model of the param
        },
        required: true, // Mandatory param
        description: 'A single test id', // param desc.
      },
    ],
    // expected responses
    responses: {
      200: {
        description: 'Test results were obtained',
        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/TestResults',
            },
          },
        },
      },
      404: {
        description: 'Test results is not found',
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
    tags: ['Test Results'],
    description: 'Create test results',
    operationId: 'createTestResults',
    parameters: [
      // expected params.
      {
        name: 'testId', // name of the param
        in: 'path', // location of the param
        schema: {
          $ref: '#/components/schemas/id', // data model of the param
        },
        required: true, // Mandatory param
        description: 'A single test id', // param desc.
      },
    ],
    requestBody: {
      // expected request body
      content: {
        // content-type
        'application/json': {
          schema: {
            $ref: '#/components/schemas/TestResultInput', // course input data model
          },
        },
      },
    },
    responses: {
      200: {
        description: 'Test results were created successfully',
        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/TestResults',
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

export default testResultsByTest;
