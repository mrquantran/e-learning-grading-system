import axios, { AxiosResponse } from "axios"

const fetchCourses = (): Promise<AxiosResponse<any>> => {
  return axios.get(`/courses`)
}

const fetchDetailCourse = (params): Promise<AxiosResponse<any>> => {
  return axios.get(`/courses/${params}`)
}

const fetchDetailCourseStatus = (params): Promise<AxiosResponse<any>> => {
  return axios.get(`/courses/${params}/status`)
}

const fetchCoursesEnroll = (): Promise<AxiosResponse<any>> => {
  return axios.get(`/courses/enroll`)
}

const fetchDraftCourses = (): Promise<AxiosResponse<any>> => {
  return axios.get(`/courses/draft`)
}

const enrollCourse = (courseId, type): Promise<AxiosResponse<any>> => {
  const data = { role: type }
  return axios.post(`/courses/${courseId}/enroll`, data)
}

const createDraftCourse = (data): Promise<AxiosResponse<any>> => {
  return axios.post(`/courses`, data)
}

const updateCourse = (courseId, data): Promise<AxiosResponse<any>> => {
  return axios.put(`/courses/${courseId}`, data)
}

const fetchCourseLectures = (courseId): Promise<AxiosResponse<any>> => {
  return axios.get(`/courses/${courseId}/lectures`)
}

const courseAPI = {
  fetchCourses,
  fetchDetailCourse,
  fetchCoursesEnroll,
  fetchCourseLectures,
  fetchDetailCourseStatus,
  fetchDraftCourses,
  enrollCourse,
  createDraftCourse,
  updateCourse
}

export default courseAPI
