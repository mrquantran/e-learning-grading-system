import axios, { AxiosResponse } from "axios"

const loginUser = (user): Promise<AxiosResponse<any>> => {
  return axios.post(`/login`, user)
}

const Account = {
  loginUser
}

export default Account
