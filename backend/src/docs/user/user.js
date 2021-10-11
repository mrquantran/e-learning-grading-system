const user = {
  get: {
    tags: ['Users'],
    description: 'Get userd',
    operationId: 'getUserById',
    parameters: [
      // expected params.
      {
        name: 'userId', // name of the param
        in: 'path', // location of the param
        schema: {
          $ref: '#/components/schemas/id', // data model of the param
        },
        required: true, // Mandatory param
        description: 'A single userid', // param desc.
      },
    ],
    // expected responses
    responses: {
      200: {
        description: 'User was obtained',
        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/Users',
            },
          },
        },
      },
      404: {
        description: 'User is not found',
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
    tags: ['Users'],
    description: 'Delete user',
    operationId: 'deleteUser',
    parameters: [
      // expected params.
      {
        name: 'userId', // name of the param
        in: 'path', // location of the param
        schema: {
          $ref: '#/components/schemas/id', // data model of the param
        },
        required: true, // Mandatory param
        description: 'A single user id', // param desc.
      },
    ],
    responses: {
      200: {
        description: 'User was deleted',
        content: {
          'application/json': {
            messages: 'deleted successfully',
          },
        },
      },
      404: {
        description: 'userId is not found',
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
    tags: ['Users'],
    description: 'Update User',
    operationId: 'updateUser',
    parameters: [
      // expected params.
      {
        name: 'userId', // name of the param
        in: 'path', // location of the param
        schema: {
          $ref: '#/components/schemas/id', // data model of the param
        },
        required: true, // Mandatory param
        description: 'A single userid', // param desc.
      },
    ],
    requestBody: {
      // expected request body
      content: {
        // content-type
        'application/json': {
          schema: {
            $ref: '#/components/schemas/UserInput',
          },
        },
      },
    },
    responses: {
      200: {
        description: 'User were updated',
        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/UserInput',
            },
          },
        },
      },
      404: {
        description: 'userId is not found',
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

export default user;
