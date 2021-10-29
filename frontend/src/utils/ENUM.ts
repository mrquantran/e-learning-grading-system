export const REGEX_EMAIL =
  "^[a-z][a-z0-9_.]{5,32}@[a-z0-9]{2,}(.[a-z0-9]{2,4}){1,2}$"

export const REGEX_PASSWORD =
  "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$"

export const TYPE_INPUT = {
  CREATE: "create",
  UPDATE: "update"
}

export const TYPE_USER = {
  student: "STUDENT",
  teacher: " TEACHER"
}

export const TYPE_LECTURES = {
  CHAPTER: "chapter",
  SECTION: "section"
}

export const TYPE_LECTURES2 = {
  SECTION: "section",
  LECTURE: "lecture"
}

export const TYPE_CREATE_COURSE = {
  COURSE: "course",
  TEST: "test"
}

export const TYPE_LECTURE = [
  {
    id: "lecture",
    title: "Lecture",
    titleInput: "New Lecture:",
    submitText: "Add Lecture",
    formField: [{ name: "title", placeHolder: "Enter a title" }],
    active: true
  },
  {
    id: "quiz",
    title: "Quiz",
    titleInput: "New Quiz:",
    submitText: "Add Quiz",
    formField: [
      { name: "title", placeHolder: "Enter a title" },
      { name: "description", placeHolder: "Quiz description" }
    ],
    active: true
  },
  {
    id: "coding",
    title: "Coding Exercise",
    titleInput: "New Coding Exercise:",
    submitText: "Add Coding Exercise",
    formField: [{ name: "title", placeHolder: "Enter a title" }],
    active: true
  },
  {
    id: "practiceTest",
    title: "Practice Test",
    titleInput: "New Practice Test:",
    submitText: "",
    formField: [{ name: "title", placeHolder: "Enter a title" }],
    active: false
  },
  {
    id: "assignment",
    title: "Assignment:",
    titleInput: "",
    formField: [{ name: "title", placeHolder: "Enter a title" }],
    submitText: "Add Assignment",
    active: true
  }
]

export const TYPE_LECTURE_ID = {
  LECTURE: "lecture",
  QUIZ: "quiz",
  CODING: "coding",
  PRACTICE_TEST: "practiceTest",
  ASSIGNMENT: "assignment"
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

export const TypeSection = {
  SECTION: "Section",
  LECTURE: "Lecture"
}
