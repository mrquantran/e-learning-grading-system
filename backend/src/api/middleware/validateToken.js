/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
const validateAPIToken = async (decoded, request) => {
  console.log('validateToken middleware run');
  const { prisma } = request.server.app;
  const { tokenId } = decoded;

  try {
    // Fetch the token from DB to verify it's valid
    const fetchedToken = await prisma.token.findOne({
      where: {
        id: tokenId,
      },
      include: {
        user: true,
      },
    });

    // Check if token could be found in database and is valid
    if (!fetchedToken || !fetchedToken.valid) {
      return { isValid: false, errorMessage: 'Invalid token' };
    }

    // Check token expiration
    if (fetchedToken.expiration < new Date()) {
      return { isValid: false, errorMessage: 'Token expired' };
    }

    const teacherOf = await prisma.courseEnrollment.findMany({
      where: {
        userId: fetchedToken.userId,
      },
      select: {
        courseId: true,
      },
    });

    // The token is valid. Pass the token payload (in `decoded`), userId, and isAdmin to `credentials`
    // which is available in route handlers via request.auth.credentials
    return {
      isValid: true,
      credentials: {
        tokenId: decoded.tokenId,
        userId: fetchedToken.userId,
        // isAdmin: fetchedToken.user.isAdmin,
        // convert teacherOf into an array of courseIds
        teacherOf: teacherOf.map(({ courseId }) => courseId),
      },
    };
  } catch (error) {
    request.log(['error', 'auth', 'db'], error);
    return { isValid: false, errorMessage: 'DB Error' };
  }
};

export default validateAPIToken;
