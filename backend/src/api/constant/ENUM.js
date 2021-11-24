/* eslint-disable import/prefer-default-export */

export function isValidDate(value) {
  if (!value.match(/^([0-9]{2})\/([0-9]{2})\/([0-9]{4})$/)) return false;

  const date = new Date(value);
  if (!date.getTime()) return false;
  return date.toISOString().slice(0, 10) === value;
}

export const FORMAT_DATE = "yyyy-MM-dd'T'HH:mm:ss.SSSxxx";

export const TYPE_LECTURES = {
  // CHAPTER: "SECTION",
  SECTION: 'SECTION',
  LECTURE: 'LECTURE',
  QUIZ: 'QUIZ',
};
