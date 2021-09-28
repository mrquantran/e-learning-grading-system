import axios, { AxiosResponse } from "axios"

export const fetchCourses = (): Promise<AxiosResponse<any>> => {
  return axios.get(`/courses`)
}
