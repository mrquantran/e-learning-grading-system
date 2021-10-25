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

export const OPTIONS_LEVEL = [
  {
    content: "-- Select Level --",
    value: -1
  },
  {
    content: "Beginner Level",
    value: 0
  },
  {
    content: "Intermediate Level",
    value: 1
  },
  {
    content: "Expert Level",
    value: 2
  },
  {
    content: "All levels",
    value: 3
  }
]

export const OPTIONS_CATEGORY = [
  {
    content: "-- Select Category --",
    value: -1
  },
  {
    content: "Development",
    value: 1
  },
  {
    content: "Business",
    value: 2
  },
  {
    content: "Finance & Accounting",
    value: 3
  },
  {
    content: "IT & Software",
    value: 4
  },
  {
    content: "Office Productivity",
    value: 5
  },
  {
    content: "Personal Development",
    value: 6
  },
  {
    content: "Design",
    value: 7
  },
  {
    content: "Marketing",
    value: 8
  },
  {
    content: "Lifestyle",
    value: 9
  },
  {
    content: "Photography & Video",
    value: 10
  },
  {
    content: "Health & Fitness",
    value: 11
  },
  {
    content: "Music",
    value: 12
  },
  {
    content: "Teaching & Academics",
    value: 13
  }
]
