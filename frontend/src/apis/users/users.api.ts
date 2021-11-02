import axios, { AxiosResponse } from "axios"

const userEnroll = (courseId, type): Promise<AxiosResponse<any>> => {
  return axios.get(`/courses/${courseId}/enroll`, {
    params: { type }
  })
}

const userAPI = {
  userEnroll
}

export default userAPI
