import axios, { AxiosResponse } from "axios"

// const fetchLectureDetail = (params): Promise<AxiosResponse<any>> => {
//   return axios.get(`/courses/${params}/lectures`)
// }

const createLecture = (sectionId, data): Promise<AxiosResponse<any>> => {
  return axios.post(`/lectures/${sectionId}/lectures-material`, data)
}

const deleteLecture = (lectureId): Promise<AxiosResponse<any>> => {
  return axios.delete(`/lectures-material/${lectureId}`)
}

const updateLecture = (lectureId, data): Promise<AxiosResponse<any>> => {
  return axios.put(`/lectures-material/${lectureId}`, data)
}

const lectureMaterialAPI = {
  createLecture,
  deleteLecture,
  updateLecture
}
export default lectureMaterialAPI
