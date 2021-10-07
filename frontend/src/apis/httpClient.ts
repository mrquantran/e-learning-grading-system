import Axios from "axios"

const HttpClient = Axios.create()

HttpClient.defaults.params = HttpClient.defaults.params || { culture: "en" }

HttpClient.interceptors.request.use(_config => {})
