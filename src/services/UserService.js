import ApiService from './ApiService'

class UserService extends ApiService {

 constructor() {
   super('')
 }

 makeLogin(credentials) {
   return this.post('/login', credentials)
 }

}

export default UserService