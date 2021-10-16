const getTopScore = {
    get: {
      tags: ['Users'],
      description: 'Get top score students',
      parameters: [],
      responses: {
        200: {
          description: 'Top score students were obtained',
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/Users',
              },
            },
          },
        },
        404: {
          description: 'Top score students are not found',
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
  
  export default getTopScore;
  