import axios, { AxiosResponse } from "axios"

const fetchLectureDetail = (params): Promise<AxiosResponse<any>> => {
  return axios.get(`/courses/${params}/lectures`)
}

const createSectionLecture = (courseId, data): Promise<AxiosResponse<any>> => {
  return axios.post(`/courses/${courseId}/lectures/section`, data)
}

const lecturesAPI = {
  fetchLectureDetail,
  createSectionLecture
}
export default lecturesAPI
