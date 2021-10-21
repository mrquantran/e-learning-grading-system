import axios, { AxiosResponse } from "axios"

const fetchLectureDetail = (params): Promise<AxiosResponse<any>> => {
  return axios.get(`/courses/${params}/lectures`)
}

const lecturesAPI = {
  fetchLectureDetail
}
export default lecturesAPI
