const getUsers = {
  get: {
    tags: ['Users'],
    description: 'Get Users',
    operationId: 'getUsers',
    parameters: [],
    responses: {
      200: {
        description: 'Users were obtained',
        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/Users',
            },
          },
        },
      },
      404: {
        description: 'Users are not found',
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
    tags: ['Users'],
    description: 'Create a user',
    operationId: 'createUser',
    // parameters: [
    //   // expected params.
    //   {
    //     name: 'testId', // name of the param
    //     in: 'path', // location of the param
    //     schema: {
    //       $ref: '#/components/schemas/id', // data model of the param
    //     },
    //     required: true, // Mandatory param
    //     description: 'A single test id', // param desc.
    //   },
    // ],
    requestBody: {
      // expected request body
      content: {
        // content-type
        'application/json': {
          schema: {
            $ref: '#/components/schemas/UserInput', // course input data model
          },
        },
      },
    },
    responses: {
      200: {
        description: 'User was created successfully',
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
};

export default getUsers;
