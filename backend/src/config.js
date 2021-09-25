// Mapper for environment variables
export const environment = process.env.NODE_ENV;
export const port = process.env.PORT || 3000;

export const accessTokenSecret = process.env.ACCESS_TOKEN_SECRET || 'mysecret';
export const refreshTokenSecret = process.env.REFRESH_TOKEN_SECRET || 'myrefreshsecret';

// export const db = {
//   name: process.env.DB_NAME || '',
//   host: process.env.DB_HOST || '',
//   port: process.env.DB_PORT || '',
//   user: process.env.DB_USER || '',
//   password: process.env.DB_USER_PWD || '',
// };

export const sendGridEmailKey = process.env.SEND_GRID_EMAIL_KEY || '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';
export const corsUrl = process.env.CORS_URL || '*';

export const tokenInfo = {
  accessTokenLife: process.env.ACCESS_TOKEN_LIFE || 60, // 60 minutes
  refreshTokenLife: process.env.REFRESH_TOKEN_LIFE || '3650d',
  emailTokenLife: process.env.EMAIL_TOKEN_EXPIRATION_MINUTES || 10,
};

// export const logDirectory = process.env.LOG_DIR;
