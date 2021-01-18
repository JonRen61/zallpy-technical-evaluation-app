import axios from 'axios'

const httpClient = axios.create({
  baseURL: 'http://localhost:8081'
})

class ApiService {

  constructor(apiUrl) {
    this.apiUrl = apiUrl
  }
  
  get(url, header) {
    const requestURL = `${this.apiUrl}${url}`
    return httpClient.get(requestURL, header)
  }
  
  post(url, header, object) {
    const requestURL = `${this.apiUrl}${url}`
    return httpClient.post(requestURL, header, object)
  }

}

export default ApiService