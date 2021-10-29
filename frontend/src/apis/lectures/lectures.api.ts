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

const lecturesAPI = {
  fetchLectureDetail,
  createSectionLecture,
  deleteSectionLecture
}
export default lecturesAPI
