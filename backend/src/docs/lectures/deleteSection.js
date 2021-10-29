const deleteSection = {
  delete: {
    tags: ['Lectures'],
    description: 'Delete lecture section',
    operationId: 'deleteLectureSection',
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
    // expected responses
    responses: {
      200: {
        description: 'Lectures were obtained',
        content: {
          'application/json': {
            schema: {
              content: {
                'application/json': {
                  messages: 'deleted successfully',
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

export default deleteSection;
