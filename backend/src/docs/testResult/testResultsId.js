const testResultId = {
  put: {
    tags: ['Test Results'],
    description: 'Update Test Results',
    operationId: 'updateTestResult',
    parameters: [
      // expected params.
      {
        name: 'testResultId', // name of the param
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
            type: 'object',
            properties: {
              result: {
                type: 'number',
                description: 'result of test',
                example: 100,
              },
            },
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
              $ref: '#/components/schemas/TestResultInput',
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
    tags: ['Test Results'],
    description: 'Delete courses',
    operationId: 'deleteTestResults',
    parameters: [
      // expected params.
      {
        name: 'testResultId', // name of the param
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
        description: 'Test result were deleted',
        content: {
          'application/json': {
            messages: 'deleted successfully',
          },
        },
      },
      404: {
        description: 'Tets result is not found',
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

export default testResultId;
