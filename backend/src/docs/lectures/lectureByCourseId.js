const getLectureByCourseId = {
  get: {
    tags: ['Lectures'],
    description: 'Get Lectures by course Id',
    operationId: 'getLecturesByCourseId',
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
              $ref: '#/components/schemas/Lectures',
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

export default getLectureByCourseId;
