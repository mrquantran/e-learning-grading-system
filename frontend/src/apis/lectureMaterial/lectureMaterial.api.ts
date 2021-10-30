import axios, { AxiosResponse } from "axios"

// const fetchLectureDetail = (params): Promise<AxiosResponse<any>> => {
//   return axios.get(`/courses/${params}/lectures`)
// }

const createLecture = (sectionId, data): Promise<AxiosResponse<any>> => {
  return axios.post(`/lectures/${sectionId}/lectures-material`, data)
}

// const deleteSectionLecture = (sectionId): Promise<AxiosResponse<any>> => {
//   return axios.delete(`/lectures/${sectionId}`)
// }

// const updateCourseLecture = (courseId, items): Promise<AxiosResponse<any>> => {
//   const data = { items }
//   return axios.put(`/courses/${courseId}/instructor-curriculum-items`, data)
// }

const lectureMaterialAPI = {
  createLecture
}
export default lectureMaterialAPI
