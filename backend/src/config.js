// Mapper for environment variables
export const environment = process.env.NODE_ENV;
export const port = process.env.PORT;

export const accessTokenSecret = process.env.ACCESS_TOKEN_SECRET;
export const refreshTokenSecret = process.env.REFRESH_TOKEN_SECRET;

// export const db = {
//   name: process.env.DB_NAME || '',
//   host: process.env.DB_HOST || '',
//   port: process.env.DB_PORT || '',
//   user: process.env.DB_USER || '',
//   password: process.env.DB_USER_PWD || '',
// };

export const corsUrl = process.env.CORS_URL;

export const tokenInfo = {
  accessTokenLife: process.env.ACCESS_TOKEN_LIFE || '1h',
  refreshTokenLife: process.env.REFRESH_TOKEN_LIFE || '3650d',
};

// export const logDirectory = process.env.LOG_DIR;
