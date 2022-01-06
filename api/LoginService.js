import axios from "axios"

class LoginService {

  async login( username, password ) {
    console.log("/auth/login", username, password)
    const response = await axios.post(process.env.VUE_APP_ENDPOINT + '/auth/login', {
      username,
      password
    })

    if (response.data.access_token) {
      return response.data.access_token
    } else {
      return null
    }
  }

}

export default new LoginService()
export { LoginService }