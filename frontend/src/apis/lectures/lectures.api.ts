import axios, { AxiosResponse } from "axios"

const fetchLectureDetail = (params): Promise<AxiosResponse<any>> => {
  return axios.get(`/courses/${params}/lectures`)
}

const createSectionLecture = (courseId, data): Promise<AxiosResponse<any>> => {
  return axios.post(`/courses/${courseId}/lectures/section`, data)
}

const deleteSectionLecture = (sectionId): Promise<AxiosResponse<any>> => {
  return axios.delete(`/lectures/${sectionId}`)
}

const updateCourseLecture = (courseId, items): Promise<AxiosResponse<any>> => {
  const data = { items }
  return axios.put(`/courses/${courseId}/instructor-curriculum-items`, data)
}

const lecturesAPI = {
  fetchLectureDetail,
  createSectionLecture,
  deleteSectionLecture,
  updateCourseLecture
}
export default lecturesAPI
