// eslint-disable-next-line import/prefer-default-export
export const JWT_ALGORITHM = 'HS256';
// eslint-disable-next-line no-useless-escape
export const REGEX_PASSWORD = '^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$';

export function generateEmailToken() {
  return Math.floor(10000000 + Math.random() * 90000000).toString();
}
