/* eslint-disable no-useless-escape */
// eslint-disable-next-line import/prefer-default-export
export const JWT_ALGORITHM = 'HS256';

export const REGEX_PASSWORD = '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$';

export const REGEX_EMAIL = '^[a-z][a-z0-9_\.]{5,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}$';

export const PASSWORD_DEFAULT = '123456';

export function generateEmailToken() {
  return Math.floor(10000000 + Math.random() * 90000000).toString();
}
