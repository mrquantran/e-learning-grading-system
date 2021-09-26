const login = {
  post: {
    tags: ['Account'],
    description: 'Signup account',
    operationId: 'accountSignup',
    parameters: [],
    requestBody: {
      // expected request body
      content: {
        // content-type
        'application/json': {
          schema: {
            $ref: '#/components/schemas/SignupAccount', // course input data model
          },
        },
      },
    },
    responses: {
      200: {
        description: 'Signup successfully',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                message: {
                  type: 'string',
                  description: 'access Token for user authorization',
                  example: 'register successfully. You need to confirm account in your email',
                },
                email: {
                  type: 'string',
                  description: 'email has signed up',
                  example: 'quantran2381@gmail.com',
                },
                emailToken: {
                  type: 'string',
                  description: 'email token',
                  example: '208134634',
                },
              },
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

export default login;
