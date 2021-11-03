import axios, { AxiosResponse } from "axios"

const userEnroll = (courseId, type): Promise<AxiosResponse<any>> => {
  return axios.get(`/courses/${courseId}/enroll`, {
    params: { type }
  })
}

const enrollUserAsInstructor = (
  courseId,
  data
): Promise<AxiosResponse<any>> => {
  return axios.post(`/courses/${courseId}/course-has-instructor`, data)
}

const userAPI = {
  userEnroll,
  enrollUserAsInstructor
}

export default userAPI
