import { apiInstance } from "./common"

class UserApi {
  get = () => apiInstance.get("/")
}

export default new UserApi()