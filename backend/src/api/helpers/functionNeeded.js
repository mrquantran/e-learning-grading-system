// eslint-disable-next-line import/prefer-default-export
export function removeEmpty(obj) {
  // eslint-disable-next-line no-unused-vars
  return Object.fromEntries(Object.entries(obj).filter(([_, v]) => v != null));
}
