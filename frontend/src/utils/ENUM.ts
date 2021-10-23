export const REGEX_EMAIL =
  "^[a-z][a-z0-9_.]{5,32}@[a-z0-9]{2,}(.[a-z0-9]{2,4}){1,2}$"

export const REGEX_PASSWORD =
  "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$"

export const TYPE_USER = {
  student: "STUDENT",
  teacher: " TEACHER"
}

export const TYPE_LECTURES = {
  CHAPTER: "chapter",
  SECTION: "section"
}

export const TYPE_CREATE_COURSE = {
  COURSE: "course",
  TEST: "test"
}
